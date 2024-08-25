# Micro SaaS Landing Page Template for Replit

This is a Replit template for quickly building Micro SaaS projects with Next.js, Tailwind CSS, Firebase authentication, and Lemon Squeezy integration.

## Features

- Next.js 14 with App Router
- Tailwind CSS for styling
- Firebase Authentication
- Lemon Squeezy integration for payments
- Responsive design
- Dark mode support

## Using this template on Replit

1. Go to [https://replit.com/@YourUsername/micro-saas-landing](https://replit.com/@YourUsername/micro-saas-landing) (replace `YourUsername` with your actual Replit username).
2. Click the "Use Template" button at the top of the page.
3. Give your project a name and click "Create Repl".
4. Once the project is created, open the `.env.local` file and update the environment variables with your Firebase and Lemon Squeezy credentials.
5. In the Replit shell, the dependencies will be automatically installed. If not, run:

   ```
   npm install
   ```

6. The development server will start automatically. If not, run:

   ```
   npm run dev
   ```

7. Click on the "Web View" button in the top right corner to see your Micro SaaS landing page in action!

## Customization

- Update the content in the `src/components/LandingPage.js` file to customize the landing page.
- Modify the `src/components/Login.js` and `src/components/Dashboard.js` files to add your own authentication and user dashboard functionality.
- Update the `src/app/api/create-checkout/route.js` file to customize the Lemon Squeezy checkout process.

## Deployment

To deploy your Micro SaaS project from Replit:

1. Make sure all your changes are saved.
2. Go to the "Deployment" tab in your Replit project.
3. Follow the instructions to connect your preferred deployment platform (e.g., Vercel, Netlify).
4. Deploy your project directly from Replit.

## Learn More

To learn more about the technologies used in this template, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Lemon Squeezy API Documentation](https://docs.lemonsqueezy.com/api)

## Support

If you encounter any issues or have questions about this template, please open an issue on the GitHub repository or contact the Replit support team.

Happy building!