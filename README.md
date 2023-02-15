# Algorithmic-Trading
Final Year Project, COMP4801, The University of Hong Kong
Link to site: https://wp.cs.hku.hk/2022/fyp22089/
___

### Abstract

A high percentage of all market trading is performed by algorithmic trading systems. As automated systems and the number of short-term high-frequency trades increase, the machine learning models to predict stock prices over such short-term trades also increase. Portfolio management is a field which requires experience, and most existing portfolio management algorithms neglect the relationship between neighboring nodes to assess the importance of the nodes in networks. Thus, the usage of Communication Probability and Relative entropy (CPR), a Technique for Order Preference by Similarity to Ideal Solution (TOPSIS), called CPR-TOPSIS shall be utilized to create a new portfolio management system that takes into consideration this relationship. To date, data collection and preprocessing, prototyping and model selection have been successfully completed, and work on the models and platform templates has been started by the team. The next steps include the creation of the new models, and the development of a web-based trading platform to execute trades using this portfolio management model along with algorithmic trading models.
___

### Background

An automated algorithmic trading system is a type of system in which markets are monitored and trades are managed by computers. Up to 90% of all market trading is currently estimated to be algorithmic. Portfolio management is an important aspect of algorithmic trading, which involves the management of various financial assets that comprise the portfolio. The goals of portfolio management are to maximize the value of the portfolio, provide balance and support any enterprise strategy. Stock selection and portfolio management models include AHP-TOPSIS, COPRAS and SAW. Big banks, hedge funds, and institutional investors all have turned to employing automated algorithmic trading to execute a trading opportunity in the market, which is not surprising given such a paradigm shift. The efficiency of big data analysis and modeling plays a critical role in the dependability and performance of such a system. Basic analysis overlooks current qualitative influences and focuses solely on profiting from historical market data, which is not a suitable approach in an ever-growing economy. Moreover, existing portfolio management models neglect the relationship between a node and its neighbors to evaluate the importance of nodes in networks. Hence, there is an increased demand for advanced knowledge for market trends, and the field of data science has been of great importance since it incorporates various algorithms, tools and machine learning principles to discover unobserved patterns from raw data. One such proposed algorithm, the Communication Probability and Relative entropy (CPR), a Technique for Order Preference by Similarity to Ideal Solution (TOPSIS), called CPR-TOPSIS, explores the relation between a node and its  neighbors to identify important nodes. This algorithm shall be implemented and tested along with a hybrid stock price prediction algorithm to identify high-potential stocks and create profitable portfolios. Most of these strategies focus on high-frequency trading, which involves multiple transactions at high speeds, usually on intraday data over very short-term holding periods. Thus, this project shall train models to select stocks and portfolios based on historical data, and results shall be evaluated over short term periods.
___

### Objectives

The research objectives of this project are to investigate the results of using CPR-TOPSIS in the fields of portfolio management and stock recommendation, and to compare the performance to pre-existing portfolio management and stock recommendation models. Emphasis shall be on creating hybrid statistical and machine learning models that take into consideration both qualitative and quantitative data to estimate future states of the market and individual stocks. These findings, along with fundamental stock data and market sentiment shall be used as input feeds into the CPR-TOPSIS system to determine high-potential stocks in the market. This shall form the basis of the recommendation system. Furthermore, the user selected stocks from the list shall be analyzed once again to determine a suitable portfolio  for investment. Default strategies shall be used on this model as well as pre-existing models to measure the efficacy of the model.

The tangible objectives of the project include the creation of a novel web-based algorithmic trading platform that utilizes CPR-TOPSIS to derive stock recommendations and manage portfolios, and a testing framework to measure the accuracy and profits linked to trades on this system. Additionally, the platform shall provide for an educational experience by having a learning mode for users to better utilize its features and learn about the stock market. Currently, the project is on track and in its early stages, and data collection and product prototyping are being carried out.

___
### Scope

Keeping in mind the time restrictions, the scope of the project has been restricted to the US market indices, with emphasis on the NASDAQ 100 and the S&P 500, which are used to determine forecasts and returns from different strategies. Regarding quantitative data, the project focuses on stocks from the US NASDAQ Stock Exchange for technical analysis. Whereas for qualitative data, Twitter data and news headlines are retrieved via web scrapers for sentiment analysis.

Both qualitative and quantitative data shall be used to optimize strategies based on a combination of technical indicators, industry, news and market sentiment. The project utilizes future forecasting models in tandem with CPR-TOPSIS to obtain the best possible results along with increased accuracy. Additionally, the algorithmic trading platform shall be developed for paper trades, and if time permits, the platform shall be linked to a real time trading interface.
___

###Deliverables

The deliverables of the project can be divided into five sections, and these have been presented in detail below.

1. Hybrid Future Prediction System

A hybrid model utilizing both statistical and machine learning methods to provide stock price predictions with a higher accuracy and taking into account prevailing market sentiment.

2. CPR-TOPSIS based Stock Recommendation System

A stock recommendation system that feeds in fundamental data, sentiment data and data from hybrid future prediction systems to evaluate stocks with the highest potential.

3. CPR-TOPSIS based Portfolio Management System

A portfolio management system, that allocates percentages to stocks selected for the portfolio, and monitors and manages the values continuously for maximized returns.

4. Web-based Algorithmic Trading Platform

A web-based algorithmic trading and financial forecasting platform based on the aforementioned CPR-TOPSIS models. This platform will serve as a full-fledged user application developed with the aim of providing maximum responsiveness and executing trading orders efficiently.


5. Backtesting Framework

A robust testing framework that shall ensure that portfolios are being created correctly and trades are being executed accurately by the proprietary web-based trading platform, and that all returns are accurately calculated.
___

### Current Progress

The sections on data collection and preprocessing, exploratory data analysis, and standard product prototype have been successfully completed. The standard prototype serves as a template on which the web-based trading platform will be developed, and it will undergo a series of changes to create an interactive easy-to-use user interface. An initial implementation of the AHP-TOPSIS model has been completed. Stock price prediction models and the CPR-TOPSIS model are under development, and shall be used in tandem to find suitable stocks and portfolios. Additionally, a basic backtesting framework has also been successfully developed and deployed using Python and Bokeh.
___

### The Team

Project Supervisor: Prof. Dirk Schnieders

Members: Abhigyan Kashyap, Ajayveer Singh, Aryak Kumar, Raunak Chopra
