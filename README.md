# Shah Lajuk Furniture Mart

A complete e-commerce furniture shop management system with customer-facing interface and admin panel.

## 🏢 Overview

Shah Lajuk Furniture Mart is a comprehensive furniture e-commerce platform built with modern web technologies. It provides a seamless shopping experience for customers and a powerful management system for administrators.

## ✨ Features

### 🛍️ Customer Features
- **Product Catalog**: Browse furniture by categories (Living Room, Bedroom, Dining, Kitchen, Office, Outdoor)
- **Product Details**: Detailed product information with images and specifications
- **Shopping Cart**: Add/remove items, quantity management, price calculation
- **Checkout Process**: Multi-step checkout with payment options and shipping information
- **Order Confirmation**: Animated success page with confetti effects
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Mobile-first approach for all devices

### 👨‍💼 Admin Features
- **Dashboard**: Overview of sales, orders, and system statistics
- **Product Management**: Add, edit, delete furniture items with images
- **Order Management**: View, process, and track customer orders
- **User Management**: Manage customer accounts and permissions
- **Manual Sales**: Point-of-sale system for in-store purchases
- **Expense Tracking**: Track business expenses and financial data
- **Banner Management**: Control homepage banners and promotions
- **Shop Settings**: Configure business information and settings

### 🎨 Design Features
- **Modern UI**: Clean, professional design with consistent branding
- **Smooth Animations**: Interactive elements and micro-interactions
- **Responsive Layout**: Adaptive design for desktop, tablet, and mobile
- **Accessibility**: Semantic HTML5 and user-friendly interface

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with CSS variables and animations
- **Bootstrap 5.3.2**: Responsive framework and components
- **Font Awesome 6.4.2**: Icon library for UI elements
- **Google Fonts (Poppins)**: Professional typography
- **JavaScript**: Interactive functionality and DOM manipulation

### Backend
- **PHP**: Server-side logic and database operations
- **MySQL**: Database management and data storage
- **phpMyAdmin**: Database administration interface

### Design System
```css
Primary Colors:
--primary-color: #b13413 (Maroon Red)
--primary-dark: #8a2410 (Dark Red)
--secondary-color: #7e786c (Neutral Gray)
--light-bg: #f5f3f0 (Cream Background)
--dark-gray: #2d2d2d (Dark Text)
```

## 📁 Project Structure

```
shah_lajuk_furniture_mart/
├── 📄 Customer Pages
│   ├── index.html              # Homepage with hero section
│   ├── all_products.html       # Product listing page
│   ├── category.html           # Category-wise products
│   ├── product_details.html    # Individual product view
│   ├── cart.html               # Shopping cart
│   ├── checkout.html           # Checkout process
│   ├── place_order.html        # Order confirmation
│   ├── about.html              # About us page
│   ├── contact.html            # Contact page
│   ├── login.html              # User login
│   └── signup.html             # User registration
│
├── 🎯 Admin Panel
│   └── admin_panel/
│       ├── index.html          # Admin dashboard
│       ├── admin.html          # Admin management
│       ├── all_furniture.html  # Product management
│       ├── all_order.html      # Order management
│       ├── users.html          # User management
│       ├── manual_sales.html   # POS system
│       ├── expense.html        # Expense tracking
│       ├── banner.html         # Banner management
│       ├── shop_info.html      # Shop settings
│       ├── furnitureform.html  # Add/edit products
│       ├── bannerform.html     # Add/edit banners
│       ├── css/                # Admin stylesheets
│       ├── js/                 # Admin JavaScript
│       ├── images/             # Admin images
│       └── uploads/            # File upload directory
│
├── 🎨 Assets
│   ├── css/
│   │   └── style.css          # Global stylesheet
│   ├── js/
│   │   ├── main.js            # Main JavaScript functions
│   │   └── custom.js          # Custom scripts
│   └── images/                 # Product and UI images
│
├── ⚙️ Configuration
│   └── config.php              # Database connection
│
└── 📚 Documentation
    └── README.md               # This file
```

## 🚀 Installation

### Prerequisites
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache/Nginx web server
- Modern web browser

### Setup Instructions

1. **Clone/Download the Project**
   ```bash
   git clone [repository-url]
   cd shah_lajuk_furniture_mart
   ```

2. **Database Setup**
   - Create a MySQL database named `shah_lajuk_furniture`
   - Import the database schema (if provided)
   - Update database credentials in `config.php`

3. **Configure Database Connection**
   ```php
   // config.php
   $con = mysqli_connect("localhost", "root", "", "shah_lajuk_furniture");
   ```

4. **Web Server Configuration**
   - Place the project in your web server's root directory
   - Ensure proper file permissions (755 for directories, 644 for files)

5. **Access the Application**
   - Customer Interface: `http://localhost/shah_lajuk_furniture_mart/`
   - Admin Panel: `http://localhost/shah_lajuk_furniture_mart/admin_panel/`

## 🎯 Usage

### For Customers
1. Browse products by category or view all products
2. Click on products to view detailed information
3. Add items to shopping cart
4. Proceed to checkout with payment and shipping details
5. Receive order confirmation with animated success page

### For Administrators
1. Access admin panel through `/admin_panel/`
2. Login with administrator credentials
3. Manage products, orders, users, and system settings
4. View dashboard analytics and reports
5. Process orders and track sales

## 🔧 Configuration

### Database Settings
Update `config.php` with your database credentials:
```php
$con = mysqli_connect("hostname", "username", "password", "database_name");
```

### Customization
- **Colors**: Modify CSS variables in `css/style.css`
- **Logo**: Replace `images/lajuk_furniture.png`
- **Business Info**: Update in admin panel settings
- **Categories**: Modify navigation dropdowns

## 🎨 Design Features

### Responsive Design
- **Desktop**: Full-featured experience with multi-column layouts
- **Tablet**: Optimized layouts for touch interaction
- **Mobile**: Compact design with stacked elements

### Animations
- **Order Success**: 5-second confetti animation
- **Page Transitions**: Smooth fade and slide effects
- **Hover Effects**: Interactive button and card animations
- **Loading States**: Professional loading indicators

### UI Components
- **Navigation**: Sticky header with dropdown menus
- **Product Cards**: Hover effects and quick actions
- **Shopping Cart**: Real-time updates and calculations
- **Forms**: Validated input fields with error handling

## 📊 System Requirements

### Minimum Requirements
- **PHP**: 7.4+
- **MySQL**: 5.7+
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **Memory**: 512MB RAM
- **Storage**: 100MB available space

### Recommended Requirements
- **PHP**: 8.0+
- **MySQL**: 8.0+
- **Web Server**: Apache 2.4+ with SSL
- **Memory**: 1GB+ RAM
- **Storage**: 500MB+ for uploads

## 🔒 Security Features

- **Input Validation**: Sanitized user inputs
- **SQL Injection Prevention**: Prepared statements
- **XSS Protection**: Output escaping
- **Session Management**: Secure session handling
- **File Upload Security**: Restricted file types and sizes

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MySQL server status
   - Verify database credentials in `config.php`
   - Ensure database exists and user has permissions

2. **CSS/JS Not Loading**
   - Check file paths in HTML headers
   - Verify file permissions
   - Clear browser cache

3. **Images Not Displaying**
   - Check `images/` directory permissions
   - Verify image file paths
   - Ensure images exist in correct locations

4. **Admin Panel Access Issues**
   - Verify admin credentials
   - Check session configuration
   - Ensure proper file permissions

## 📈 Performance Optimization

### Frontend Optimization
- **Minified CSS**: Optimized stylesheets
- **Compressed Images**: Reduced file sizes
- **Lazy Loading**: Images load on demand
- **Browser Caching**: Static asset caching

### Backend Optimization
- **Database Indexing**: Optimized queries
- **Connection Pooling**: Efficient database connections
- **Caching**: Session and data caching
- **Error Handling**: Graceful error management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is proprietary software for Shah Lajuk Furniture Mart. All rights reserved.

## 📞 Support

For support and inquiries:
- **Email**: info@shahlajukfurniture.com
- **Phone**: +1 234 567 890
- **Address**: 123 Furniture Street, City

## 🔄 Version History

### Version 1.0.0 (Current)
- Complete e-commerce functionality
- Admin panel with full management features
- Responsive design for all devices
- Animated order confirmation
- Optimized CSS and performance

---

**Built with for Shah Lajuk Furniture Mart**