# E-commerce

Silk rail is an e-commerce application, this project uses react in front, symfony in back (api rest) and ansible in devops.

![silk-rail](https://github.com/EpitechMscProPromo2025/T-WEB-600-MAR-6-1-ecommerce-benjamin.nicolas/blob/devops/Documentation/BDD/home.PNG)

## Features

/api/register: registration of user

/api/login: connection of user, retrieving the authentication token

/api/users: update current user information, display current user information

/api/products: Retrieve list of products, Add a product

/api/products/{productId}:  Retrieve information on a specific product, Modify and delete a product

/api/carts/{productId}: Add a product to the shopping cart, Remove a product to the shopping cart

/api/carts: State of the shopping cart (list of products in the cart)

/api/carts/validate: Validation of the cart (aka converting the cart to an order)

/api/orders/: recover all orders of the current user

/api/orders/{orderId}: Get information about a specific order

## Devops Ansible

### Requirements

* Virtual machine or server with debian11-bullseye
* Key ssh on your local machine.

### Install Ansible

you must install ansible on your local machine.
[Documentation](https://docs.ansible.com/ansible/latest/installation_guide/index.html)

### Create access to VM or Server

* Create an user "ansible" with root access on your remote machine.

* Add your key ssh local on your remote machine.

```
ssh-copy-id ansible@[YOUR-HOST]
```

* Try to connect in ssh on your remote machine.

### Edit files

#### hosts

```
[debian11]
YOUR-HOST ansible_connection=ssh ansible_user=ansible
```

#### playbook.yml

* E_ORIGIN : path in the selected remote machine
* E_IP : IP's remote machine

```
  vars:
    ansible_ssh_private_key_file: ~/.ssh/id_rsa
    E_ORIGIN: "[PATH]"
    E_IP: "[YOUR-HOST]"
```

#### Database

you can change the information for the database.

```
/silk_rail/.env
DATABASE_URL="mysql://user:mypassword@127.0.0.1:3306/my_database?serverVersion=mariadb-10.3.38&charset=utf8mb4"
```

```
/silk_rail/docker-compose.yml
    environment:
      MYSQL_USER: user
      MYSQL_PASSWORD: mypassword
      MYSQL_DATABASE: my_database
      MYSQL_ROOT_PASSWORD: rootpassword
```

### Play Ansible 

Run playbook for deployment application.

```
ansible-playbook playbook.yml -i hosts
```

### Tests

Go on http://[YOUR-HOST]:3000
Go on http://[YOUR-HOST]:8000/api/products

## Dependencies client

    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.23",
    "@types/react": "^18.0.32",
    "@types/react-dom": "^18.0.11",
    "axios": "^1.3.4",
    "gsap": "^3.11.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-gsap": "^3.2.1",
    "react-router-dom": "^6.8.2",
    "react-scripts": "5.0.1",
    "react-scroll-video": "^1.0.6",
    "react-scrollmagic": "^2.3.0",
    "react-video-scroll": "^1.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"

## Dependencies symfony api

    "FrameworkBundle"
    "DoctrineBundle"
    "DoctrineMigrationsBundle"
    "DebugBundle"
    "TwigBundle"
    "WebProfilerBundle"
    "TwigExtraBundle"
    "SecurityBundle"
    "MonologBundle"
    "MakerBundle"
    "SensioFrameworkExtraBundle"
    "JMSSerializerBundle"
    "FOSRestBundle"
    "LexikJWTAuthenticationBundle"
    "ApiPlatformBundle"


## Team

* Benjamin Nicolas: [Github](https://github.com/benepitech) [Linkedin](https://www.linkedin.com/in/benjamin-nicolas-4336a4172/)
* Killian Occelli: [GitHub](https://github.com/4illian) [Linkedin](https://www.linkedin.com/in/4illian/)
* Vincent Barone: [GitHub](https://github.com/tzarfaros) [Linkedin](https://www.linkedin.com/in/vincent-barone/)


