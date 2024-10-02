# Food API

This project is simple [Nestjs](https://github.com/nestjs/nest) application to manage food via Rest API.
For the database management we use [Prisma](https://docs.nestjs.com/recipes/prisma)

## Description

A food can be related to a category, a food can be also related to a meal. Each model is managed by it's own crud.

## Database Models

We’ll have three models:

- Food: Represents the food items.
- Category: Represents categories (e.g., Fruits, Vegetables, etc.).
- Meal: Represents meals (e.g., Breakfast, Lunch, etc.), which include multiple foods.

## Structure

- Category will be related to Food (1-to-many relationship)
- Meal will be related to multiple Food items (many-to-many relationship)

## How it Works

- Categories can be created and linked to multiple Food items.
- Meals consist of multiple Food items.
- You can query meals and retrieve all the foods linked to that meal.

## Install dependencies

```bash
$ npm install
```

## Compile and run the project

```bash

# .env
cp .env.example .env

# database
$ npm run db

# generate models
$ npm run generate

# database migrations
npm run migrations

# development
$ npm run dev

# debug
$ npm run debug

# preview
$ npm run preview


# production
$ npm run prod
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
