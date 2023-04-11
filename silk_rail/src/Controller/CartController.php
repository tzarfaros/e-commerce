<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use DateTimeZone;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: "/api/carts", name: "carts_")]
class CartController extends AbstractController
{
    public function __construct(private OrderRepository $orders, private ProductRepository $products, private UserRepository $users)
    {
    }

    #[Route(path: "/validate", name: "validate_cart", methods: ["POST"])]
    function validateCart(): Response
    {
        $user = $this->getUser();
        $cart = $this->orders->findOneBy(['user' => $user->getId(), 'status' => 'cart']);

        if ($cart) {
            $cart->setStatus('order');
            $cart->setCreationDate(new \DateTime('now', new DateTimeZone('UTC')));
            $this->orders->save($cart, true);

        } else {
            return $this->json(['error' => 'No cart found'], Response::HTTP_BAD_REQUEST);
        }

        return $this->json(null, Response::HTTP_OK);
    }

    #[Route(path: "", name: "all", methods: ["GET"])]
    function getMyCart(): Response
    {
        $user = $this->getUser();
        $cart = $this->orders->findOneBy(['user' => $user->getId(), 'status' => 'cart']);
        if ($cart) {
            return $this->json($cart, Response::HTTP_OK, [], ['groups' => 'order:my-cart']);

        } else {
            return $this->json(['error' => 'No cart found'], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route(path: "/{productId}", name: "add_product_to_cart", methods: ["POST"])]
    function addProductToCart($productId): Response
    {
        $product = $this->products->find($productId);
        if (!$product) {

            return $this->json(['error' => 'No product id provided'], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->getUser();
        $cart = $this->orders->findOneBy(['user' => $user->getId(), 'status' => 'cart']);
        if (!$cart) {
            $cart = new Order();
            $user = $this->users->find($user->getId());
            $cart->setUser($user);
            $cart->setStatus('cart');

        }
        $cart->addProduct($product);
        $cart->setTotalPrice($cart->getTotalPrice() + $product->getPrice());
        $this->orders->save($cart, true);

        return $this->json(null, Response::HTTP_OK);
    }

    #[Route(path: "/{productId}", name: "remove_product_from_cart", methods: ["DELETE"])]
    function removeProductFromCart($productId): Response
    {
        try {
            $product = $this->products->find($productId);
        } catch (\Exception $e) {

            return $this->json(['error' => 'No product id provided'], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->getUser();
        $cart = $this->orders->findOneBy(['user' => $user->getId(), 'status' => 'cart']);
        if ($cart) {
            $cart->removeProduct($product);
            $cart->setTotalPrice($cart->getTotalPrice() - $product->getPrice());
            $this->orders->save($cart, true);

        } else {

            return $this->json(['error' => 'No cart found'], Response::HTTP_BAD_REQUEST);
        }

        return $this->json(null, Response::HTTP_OK);
    }
}
