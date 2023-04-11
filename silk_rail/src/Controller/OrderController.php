<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\SecurityBundle\Security;

#[Route(path: "/api/orders", name: "orders_")]
class OrderController extends AbstractController
{
    public function __construct(private OrderRepository $orders, private ProductRepository $products, private UserRepository $users)
    {
    }

    #[Route(path: "", name: "my_orders", methods: ["GET"])]
    public function getMyOrders(): Response
    {
        $user = $this->getUser();
        $orders = $this->orders->findBy(['user' => $user->getId(), 'status' => 'order']);
        return $this->json($orders, Response::HTTP_OK, [], ['groups' => 'order:my-orders']);
    }

    #[Route(path: "/{id}", name: "one", methods: ["GET"])]
    public function getOneOrder($id): Response
    {
        $user = $this->getUser();
        $order = $this->orders->findOneBy(['user' => $user->getId(), 'id' => $id]);
        if ($order) {
            if ($order->getUser()->getId() === $user->getId()) {

                return $this->json($order, Response::HTTP_OK, [], ['groups' => 'order:my-orders']);
            } else {

                return $this->json(['error' => "It's not YOURS!!"], Response::HTTP_BAD_REQUEST);
            }
        } else {

            return $this->json(['error' => 'No order found'], Response::HTTP_BAD_REQUEST);
        }
    }
}
