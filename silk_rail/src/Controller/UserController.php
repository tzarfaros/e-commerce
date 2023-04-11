<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
#[Route(path: "/api/users", name: "users_")]

class UserController extends AbstractController
{
    public function __construct(private UserRepository $users)
    {
    }

    #[Route(path: "/register", name: "register", methods: ["POST"])]
    public function register(UserPasswordHasherInterface $passwordHasher, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $user = $this->users->findOneBy(['email' => $data['email']]);
        if ($user) {
            return $this->json(['message' => 'User already exists'], Response::HTTP_BAD_REQUEST);
        }
        $user = new User();
        $user->setEmail($data['email']);
        $user->setLogin($data['login']);
        $user->setFirstname($data['firstname']);
        $user->setLastname($data['lastname']);
        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $user->setPassword($hashedPassword);
        $this->users->save($user, true);

        return $this->json($user, Response::HTTP_CREATED);
    }


    #[Route(path: "", name: "get_authentified_user", methods: ["GET"])]
    function all(): Response
    {
        $user = $this->getUser();

        $data = $this->users->findAll();
        return $this->json($user, Response::HTTP_OK, [], ['groups' => 'user:read']);
    }

    #[Route(path: "", name: "update_authentified_user", methods: ["PUT"])]
    function update(Request $request): Response
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $user->setFirstname($data['firstname'] ?? $user->getFirstname());
        $user->setLastname($data['lastname'] ?? $user->getLastname());
        $user->setLogin($data['login'] ?? $user->getLogin());
        $user->setEmail($data['email'] ?? $user->getEmail());
        $this->users->save($user, true);
        return $this->json($user, Response::HTTP_OK, [], ['groups' => 'user:read']);
    }
}
