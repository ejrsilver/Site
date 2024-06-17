# Site

The source code for my personal website, at [ejrsilver.com](https://ejrsilver.com).

I've written the site to be an SPA (Single Page Application), so that I can get better at vanilla JavaScript. I'll worry about adding good content and stuff once I've got that figured out.

I've configured the Docker to use Apache Server with PHP and a MySQL instance, though there is currently no actual backend so it's just in case I feel like adding that stuff in later.

## Environment Variables

For the Docker setup (if I ever decide to actually use it), the following are the environment variables that must be set in a file called `.env`.

| Name                | Sample Value |
| ------------------- | ------------ |
| MYSQL_PASSWORD      | "password"   |
| MYSQL_USER          | "admin"      |
| MYSQL_ROOT_PASSWORD | "password"   |
| MYSQL_DATABASE      | "db"         |

Obviously I'm not actually gonna use those values.

## Running the Project

Run the following to start up the site:

```bash
docker compose up --detach
```

and the following to stop it:
```bash
docker compose down
```
