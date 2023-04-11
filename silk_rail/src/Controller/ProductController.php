<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: "/api/products", name: "products_")]
class ProductController extends AbstractController
{
    public function __construct(private ProductRepository $products)
    {
    }


    #[Route(path: "", name: "all", methods: ["GET"])]
    function all(): Response
    {
        $data = $this->products->findAll();
        return $this->json($data);
    }

    #[Route(path: "/{id}", name: "one", methods: ["GET"])]
    function one(int $id): Response
    {
        $data = $this->products->find($id);
        return $this->json($data);
    }

    #[Route(path: "", name: "create", methods: ["POST"])]
    function create(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $product = new Product();
        $product->setName($data['name']);
        $product->setPrice($data['price']);
        $product->setDescription($data['description'] ?? '');
        $product->setPhoto($data['photo'] ?? '');

        $this->products->save($product, true);
        return $this->json($product, Response::HTTP_CREATED);
    }


    #[Route(path: "/{id}", name: "update", methods: ["PUT"])]
    function update(int $id, Request $request): Response
    {
        $product = $this->products->find($id);

        if (!$product) {
            throw $this->createNotFoundException(sprintf('No product found with id "%s"', $id));
        }

        $data = json_decode($request->getContent(), true);
        $product->setName($data['name'] ?? $product->getName());
        $product->setPrice($data['price'] ?? $product->getPrice());
        $product->setDescription($data['description'] ?? $product->getDescription());
        $product->setPhoto($data['photo'] ?? $product->getPhoto());

        $this->products->save($product,true);

        return $this->json($product);
    }

    #[Route(path: "/{id}", name: "delete", methods: ["DELETE"])]
    function delete(int $id): Response
    {
        $product = $this->products->find($id);

        if (!$product) {
            throw $this->createNotFoundException(sprintf('No product found with id "%s"', $id));
        }

        $this->products->remove($product,true);

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}
