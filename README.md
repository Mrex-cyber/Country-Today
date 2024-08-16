# Country Today

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Table of Contents

- [Architecture](#architecture)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)

## Architecture

The project follows a standard Angular architecture with a focus on modularity and reusability. Below is an overview of the main directories:

- **src/app**: Contains all the Angular components, services, and modules.
  - **components**: Angular components used in the application.
  - **services**: Shared services for handling data and business logic.
  - **models**: TypeScript interfaces and models.
  - **shared**: Shared modules, components, and utilities.
  - **pipes**: Custom Angular pipes.
  
- **assets**: Static files like images and stylesheets.
- **environments**: Environment-specific configurations.

## Installation

To get started with the project, follow the instructions below.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or later)
- [npm](https://www.npmjs.com/) (version 7.x or later)
- [Angular CLI](https://cli.angular.io/) (version 14.x or later)

### Steps

1. **Clone the repository**:
   ```
   bash
   git clone https://github.com/Mrex-cyber/Country-Today.git
   cd your-repo
   ```
2. **Run the following command in the project root to install all necessary packages**:
   npm install
3.1. **Start developer server**:
    ```
    ng serve
    ```
3.2. **Start production version**:
    ```
    ng serve -c=production
     ```
