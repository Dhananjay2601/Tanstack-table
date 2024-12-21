# User Management Table with Tanstack Table 

## Description

This project is an app built using **Next.js 15** & **React 19**  that provides a paginated table of users using the [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/users). The users' data is fetched dynamically and paginated for easy browsing. The user can navigate between pages using a simple pagination mechanism, and the URL reflects the current page number.


## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies
```bash
npm install
# OR
yarn install
```
## Note
Use --force or --legacy-peer-deps due to React 19

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Open the application
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach

It was my first time using **TanStack Table**, though I had previously used **TanStack Query** in a React Native environment. This project was both fun and very challenging as it was my first time applying this in a web development context. However, as long as the library documentation is up to date, I don’t sweat much.

I approached this assessment as a challenge and dove right in. I made sure to follow all industry standards for optimal performance, code readability, and scalability.

## Challenges

One of the main challenges I faced was implementing pagination with dynamic routing. The API response only contained 10 users, and there was no way to pass pagination or limit parameters. To handle this, I had to manage pagination on the frontend. While I am aware of dynamic routing in Next.js using the `[page].tsx` method, I couldn't use it in this case due to limitations. As a result, I had to improvise and come up with a solution that worked for the given constraints.

Another challenge I encountered was with **TanStack Table** and its types. I struggled a lot with the type issues it threw at me and, unfortunately, couldn't commit the code with 100% zero usage of `any`. I understand the importance of avoiding `any` types, and trust me, I also dislike using it. I hope you can pardon me for this, but it was a learning experience.

Looking forward to working with you... that is if I get selected *lol*.
