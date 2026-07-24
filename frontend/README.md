# Anchored Hives Honey E-Commerce Frontend

A modern e-commerce frontend for selling honey products, built with React, Vite, and TailwindCSS.

## Features

- **Home Page**: Hero section, featured products, testimonials, and call-to-action sections
- **Products Page**: Product grid with filtering by category, price range, and sorting options
- **Product Detail Page**: Detailed product information, quantity selector, add to cart functionality
- **Shopping Cart**: Cart management with quantity updates and order summary
- **Checkout Page**: Delivery information form and multiple payment methods (M-Pesa, Cash on Delivery, Bank Transfer)
- **Order Success Page**: Confirmation page after successful order placement

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 5.2.0** - Build tool and dev server
- **React Router DOM 6.23.1** - Client-side routing
- **TailwindCSS 3.4.3** - Utility-first CSS framework
- **Lucide React 0.379.0** - Icon library

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd "d:\Anchored Hives Honey E-Commerce Management System\frontend"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `dist` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with header and footer
│   ├── context/
│   │   └── CartContext.jsx     # Cart state management
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Products.jsx        # Products listing page
│   │   ├── ProductDetail.jsx   # Single product details
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── Checkout.jsx        # Checkout page
│   │   └── OrderSuccess.jsx    # Order confirmation
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
└── postcss.config.js           # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors

The honey-themed color palette is defined in `tailwind.config.js`:
- `honey-50` to `honey-900` - Various shades of honey/amber colors

### Products

Product data is currently stored in the page components. In a production environment, this would be fetched from a Flask backend API.

### Cart Context

The cart functionality uses React Context for state management. It includes:
- Add items to cart
- Remove items from cart
- Update item quantities
- Clear cart
- Calculate totals

## Backend Integration

This frontend is designed to work with a Flask backend. To integrate:

1. Create API endpoints in Flask for:
   - Products listing
   - Product details
   - Order submission
   - User authentication

2. Update the frontend to fetch data from these endpoints using `fetch` or a library like `axios`

3. Replace the static product data with API calls

## License

This project is part of the Anchored Hives Honey E-Commerce Management System.
