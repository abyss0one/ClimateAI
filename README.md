# Climate AI Project
***
![Climate AI Logo](./assets/climate-ai-logo.png)

## Climate AI is a cutting-edge boot camp project that uses machine learning to predict weather and raise awareness about climate change. Aligned with multiple SDGs, it strives for a sustainable future through data-driven insights: AÑADIR ENLACE

### Screenshot

![Climate AI App Screenshot](./assets/screenshot.png)

## Table of Contents
1. [Description](#description)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started)
4. [API Endpoints](#api-endpoints)
5. [Back Configuration](#back-configuration)
6. [Organization](#organization)
7. [Conclusions](#conclusions)
8. [Authors and Contact](#authors-and-contact)

## Description

The Climate AI is a final boot camp project is an innovative endeavor that focuses on predicting precipitation, temperature, and humidity patterns using state-of-the-art machine learning algorithms and data analysis. Beyond its scientific goals, Climate AI also strives to raise awareness about climate change and its global impact.

**Sustainable Development Goals (SDGs)**: The Climate AI project directly contributes to several SDGs, including:

- SDG 13 - Climate Action: Providing accurate weather predictions and climate insights to facilitate proactive climate action and adaptation.
- SDG 9 - Industry, Innovation, and Infrastructure: Utilizing machine learning and advanced technology to foster innovations in climate science.
- SDG 4 - Quality Education: Raising awareness about climate change to empower individuals with knowledge for informed decision-making.
- SDG 6 - Clean Water and Sanitation: Improving the understanding of precipitation patterns for sustainable water management.

The Climate AI project aspires to become a catalyst for positive change, utilizing AI-driven solutions to tackle climate-related issues while promoting responsible environmental practices and global cooperation. Through its scientific endeavors and awareness-building initiatives, Climate AI envisions a world where data-driven insights and collective action lead to a sustainable and resilient future for all.

## Technologies

The project development utilized the following technologies:


**Back-end Dependencies**:
- cors v2.8.5
- express v4.18.2
- multer v1.4.5-lts.1

**Front-end Dependencies**:
- axios v1.4.0
- chart.js v4.3.0
- file-saver v2.0.5
- jstat v1.9.6
- leaflet v1.9.4
- react v18.2.0
- react-chartjs-2 v5.2.0
- react-dom v18.2.0
- react-icons v4.10.1
- react-leaflet v4.2.1
- react-router-dom v6.14.2
- scipy v0.1.4
- simple-statistics v7.8.3

**Machine Learning and Python**:
- Python: The project leveraged Python as the primary programming language for all machine learning tasks. Python's versatility and extensive libraries made it an excellent choice for this purpose.
- Jupyter: Jupyter notebooks played a vital role in enabling interactive data exploration, analysis, and model development. They provided a convenient environment for experimenting with code snippets and visualizing data.
- NumPy: Version 1.23.5 of NumPy was used to handle arrays and perform various numerical computations efficiently. NumPy's array operations significantly enhanced the project's performance.
- SciPy: Version 1.9.3 of SciPy complemented NumPy by providing additional scientific computing capabilities. It was used for tasks such as integration, interpolation, optimization, and more.
- Scikit-learn: Version 1.0.2 of Scikit-learn, a powerful machine learning library, played a central role in building and evaluating machine learning models. It provided a wide range of algorithms and utilities for classification, regression, clustering, and more.
- Pandas: Pandas version 1.4.4 was utilized for data manipulation and analysis. It provided convenient data structures, such as DataFrames, that made it easier to clean and preprocess data.
- Matplotlib: Version 3.6.2 of Matplotlib was used for creating visualizations and graphs. Its capabilities helped in understanding data patterns and model performance.
- Additional Libraries: The project also made use of several additional libraries, including python, sys, joblib, datetime, sklearn.model_selection import train_test_split, sklearn.linear_model import LinearRegression, sklearn.preprocessing import PolynomialFeatures, sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score, matplotlib.pyplot as plt, and matplotlib.dates as mdates. These libraries provided various functionalities, such as system interactions, date handling, and evaluation metrics, which contributed to the success of the machine learning process.
- Database Usage: In addition to the mentioned libraries, the project involved working with databases. SQL was utilized for this purpose, allowing the project to store and retrieve data from the database efficiently.

TensorFlow and Keras??


**Development Dependencies**:
- @types/react v18.2.14
- @types/react-dom v18.2.6
- @vitejs/plugin-react v4.0.1
- autoprefixer v10.4.14
- eslint v8.44.0
- eslint-plugin-react v7.32.2
- eslint-plugin-react-hooks v4.6.0
- eslint-plugin-react-refresh v0.4.1
- postcss v8.4.25
- tailwindcss v3.3.2
- vite v4.4.0

## Getting Started

To run the Climate AI project on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using npm:
npm install
3. Run the app:
npm run dev
node server.js

## API Endpoints

The Climate AI server provides the following API endpoints:
- **GET /prediction/:idcomarca/:dias**: Fetch data from the server for weather prediction. Parameters `idcomarca` and `dias` represent the region and number of days to predict, respectively.
- **GET /calculate_SPI/:filename/:prediction**: Calculate the Standardized Precipitation Index (SPI) using historical data. Parameters `filename` and `prediction` are used as inputs for the calculation.

## Back Configuration

The project uses configuration in the `package.json` file. You can customize this configuration as needed.
{
 "back": {
"someKey": "someValue",
  "anotherKey": "anotherValue"
    }
 }

## Organization
The Agile Scrum methodology was applied during the project development. The following organization process was followed:
* Initial meeting to establish project goals and scope.
* Development of the Minimum Viable Product (MVP).
* Task division and assignment to team members.
* Regular follow-up meetings every 1.5 hours to assess progress and address any issues.
* Final meeting to review the outcomes and evaluate the success of the project.

## Conclusions
The Des/Via project demonstrated good organization and coordination during development, successfully achieving the proposed MVP. However, there are areas for improvement in future versions, including:
* Generation of routes between points of interest.
* Implementation of a user rating system.
* Scalability to incorporate additional cities.
* Support for multiple languages.
* Enhancements to the responsive version of the website.

## Authors and Contact
This project was developed by [Your Name] and [Contributor's Name]. Feel free to contact us with any questions or feedback!

Email: [your.email@example.com]
LinkedIn: [Your LinkedIn Profile URL]
