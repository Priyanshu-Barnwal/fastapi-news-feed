# Real-Time News Aggregator and Notification System

This project is a high-performance, real-time news aggregator and notification system built with FastAPI. It asynchronously fetches news from various sources, stores and caches them efficiently, and allows users to subscribe to different news categories. Users receive real-time notifications for new articles in their subscribed categories.

The architecture leverages modern Python technologies including Redis for caching, Celery for asynchronous task handling (like notifications and web crawling), and MySQL with SQLAlchemy for persistent data storage.

## Key Features

* **User Authentication & Authorization:**
    * Secure user registration and login system using OAuth2 with JWT tokens.
    * Role-Based Access Control (RBAC) to ensure users can only perform authorized actions.
    * Secure password hashing and session management.
* **News Crawling & Aggregation:**
    * Asynchronously crawls and aggregates news from multiple sources.
    * Uses Redis to cache aggregated news, speeding up retrieval and reducing database load.
    * Persists news articles and user data in a MySQL database.
* **Subscription & Notification System:**
    * Users can subscribe and unsubscribe from various news categories.
    * Asynchronous notifications are managed by a Celery distributed task queue.
    * Users are notified in real-time when new content matching their subscriptions becomes available.
* **Secure Communication:**
    * Ensures secure data transmission using SSL certificates.
    * Follows best practices for data encryption and data security.
* **Efficient Caching:**
    * Leverages Redis to cache frequently accessed data, such as news articles and user session information, to optimize performance.
* **Asynchronous Operations:**
    * Built with FastAPI's native `async`/`await` support for high-concurrency I/O.
    * Delegates heavy I/O-bound operations (e.g., sending notifications, web crawling) to Celery workers.
* **Comprehensive Testing:**
    * Includes a robust test suite using Pytest to ensure reliability.
    * Automated tests cover all major components, including user authentication, news crawling, and notifications.

## Technology Stack

* **Backend:** FastAPI, Python
* **Server:** Uvicorn
* **Database:** MySQL
* **ORM:** SQLAlchemy
* **Database Migrations:** Alembic
* **Caching:** Redis
* **Async Task Queue:** Celery
* **Task Monitoring:** Flower
* **Authentication:** OAuth2, JWT (JSON Web Tokens)
* **Data Validation:** Pydantic
* **Testing:** Pytest
* **Containerization:** Docker
* **Dependency Management:** Poetry
* **Code Formatting:** Black

## Prerequisites

* Python 3.9+
* Poetry
* Docker & Docker Compose (Recommended)
* A running MySQL server
* A running Redis instance

