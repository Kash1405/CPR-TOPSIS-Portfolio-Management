import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const handleClick = (company) => {
//     // first thing you need to check if if there is a user logged in or not
//     // if the user is logged in, gg
//     // if the user is not logged in, go to login, or sign up screen

//     let user = JSON.parse(localStorage.getItem("user"));

//     if (user === null) {
//         alert("Login or Create an Account First")
//         window.location.href = '/login'
//     }
//     else {
//         let ticker = company._id
//         let data = {
//             ticker
//         }

//         let config = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: 'http://localhost:8080/v1/user/watchlist',
//             headers: {
//                 'Authorization': 'Bearer ' + user.token.token,
//                 'Content-Type': 'application/json'
//             },
//             data: data
//         };

//         axios.request(config)
//             .then((response) => {
//                 console.log(JSON.stringify(response.data));
//             })
//             .catch((error) => {
//                 console.log(error);
//             });


//     }


// }

function CompanyList() {
    const [companies, setCompanies] = useState(company.list)

    // useEffect(() => {
    //     let config = {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url: 'http://localhost:8080/v1/company/',
    //         headers: {}
    //     };

    //     axios.request(config)
    //         .then((response) => {
    //             setCompanies(response.data['companies']);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });


    // }, [])
    return (
        companies ? <div>
            {
                companies.map((company) => <p>{company.ticker}</p>)
            }
        </div> : ""
    )
}

export default CompanyList

const company = {
    "list": [
        {
            "ticker": "AAPL",
            "news_items": [
                {
                    "title": "Stock Market Rallies As 11 Bank Giants Aid First Republic, But FRC Dives Late; Apple, Microsoft Flash Buy Signals",
                    "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rallies-as-11.html"
                },
                {
                    "title": "Is This PayPal's Biggest Threat?",
                    "source": "https://finance.yahoo.com/m/71c9d6dc-84ab-3c18-a891-d13b0aac4c59/is-this-paypal%27s-biggest.html"
                },
                {
                    "title": "3 Big Tech Stocks are Holding Up the Entire Market",
                    "source": "https://finance.yahoo.com/news/3-big-tech-stocks-holding-223010663.html"
                },
                {
                    "title": "Stock Market Rebounds As 11 Bank Giants Aid First Republic; Apple, Microsoft Flash Buy Signals",
                    "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rebounds-as-11.html"
                },
                {
                    "title": "Lockdown Logic Rears Its Head in Stock Rally Running on Nerves",
                    "source": "https://finance.yahoo.com/news/lockdown-logic-rears-head-stock-202158412.html"
                },
                {
                    "title": "The Big Tech Layoffs Malaise Reveals A Deeper Truth",
                    "source": "https://finance.yahoo.com/news/big-tech-layoffs-malaise-reveals-172319106.html"
                },
                {
                    "title": "The Most Outrageous CEO Salaries and Perks",
                    "source": "https://finance.yahoo.com/news/most-outrageous-ceo-salaries-perks-150002741.html"
                },
                {
                    "title": "10 Stocks ChatGPT Says Will Make Me Rich in 10 Years",
                    "source": "https://finance.yahoo.com/news/10-stocks-chatgpt-says-rich-143852562.html"
                },
                {
                    "title": "3 ETFs That Can Supercharge Your Retirement Savings",
                    "source": "https://finance.yahoo.com/m/9400738d-0e60-3e08-9779-792cc5e5939b/3-etfs-that-can-supercharge.html"
                },
                {
                    "title": "Microsoft Stock: Bear vs. Bull",
                    "source": "https://finance.yahoo.com/m/44e19bf9-ce23-39e7-9645-da73d9bca9c7/microsoft-stock%3A-bear-vs.-bull.html"
                }
            ]
        },
        {
            "ticker": "ABNB",
            "news_items": [
                {
                    "title": "Airbnb, Inc. (ABNB) Down 17.1% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/airbnb-inc-abnb-down-17-153003448.html"
                },
                {
                    "title": "Could Airbnb Stock Recover in 2023?",
                    "source": "https://finance.yahoo.com/m/8e67617a-5b86-38db-b65d-bccf4e6bfc04/could-airbnb-stock-recover-in.html"
                },
                {
                    "title": "A Bull Market Is Coming: Buy These Hot Growth Stocks Before They Take Off",
                    "source": "https://finance.yahoo.com/m/73cecc0e-dfc9-3559-8bc4-110e3ac8d503/a-bull-market-is-coming%3A-buy.html"
                },
                {
                    "title": "Got $1,000? Here Are 3 Stocks to Buy That Could Triple That",
                    "source": "https://finance.yahoo.com/m/81b36dc6-5560-329b-9cfe-07ce62536ac0/got-%241%2C000%3F-here-are-3-stocks.html"
                },
                {
                    "title": "New York City Expands Short-Term Rental Ban by 2,300 More Buildings",
                    "source": "https://finance.yahoo.com/news/york-city-adds-2-300-215000568.html"
                },
                {
                    "title": "Airbnb Stock: Is It A Buy Or Sell? Here's What Fundamentals, ABNB Stock Chart Action Say",
                    "source": "https://finance.yahoo.com/m/580886a6-3e0d-35a7-a481-18be1eabcd9f/airbnb-stock%3A-is-it-a-buy-or.html"
                },
                {
                    "title": "What Makes Airbnb (ABNB) a Long-Term Holding?",
                    "source": "https://finance.yahoo.com/news/makes-airbnb-abnb-long-term-105834836.html"
                },
                {
                    "title": "Airbnb CEO: Companies that talked about crypto last year and AI now 'probably don't understand either'",
                    "source": "https://finance.yahoo.com/news/airbnb-ceo-companies-that-talked-about-crypto-last-year-and-ai-now-probably-dont-understand-either-145847071.html"
                },
                {
                    "title": "3 Growth Stocks With More Potential Than Any Cryptocurrency",
                    "source": "https://finance.yahoo.com/m/0b556262-cffa-3c53-9c07-d9c616d2b124/3-growth-stocks-with-more.html"
                },
                {
                    "title": "3 Supercharged Stocks With More Potential Than Any Cryptocurrency",
                    "source": "https://finance.yahoo.com/m/87d02f8e-3a64-3adb-9e85-884946b1783e/3-supercharged-stocks-with.html"
                }
            ]
        },
        {
            "ticker": "ADBE",
            "news_items": [
                {
                    "title": "First Republic, Credit Suisse, Proterra, Adobe, UiPath, Signet, and More Stock Market Movers",
                    "source": "https://finance.yahoo.com/m/d45e628a-4c1e-3dc2-b5c8-1f7752b5d09c/first-republic%2C-credit.html"
                },
                {
                    "title": "Adobe Stock Rises After Creative Software Firm Beats Quarterly Targets",
                    "source": "https://finance.yahoo.com/m/68077995-7c2b-382e-91ba-b620733cf949/adobe-stock-rises-after.html"
                },
                {
                    "title": "As the Stock Surges, Let's Take Another Look at Adobe",
                    "source": "https://finance.yahoo.com/m/4e139a43-a38a-31e6-a4b8-9a7aadf25431/as-the-stock-surges%2C-let%27s.html"
                },
                {
                    "title": "26 Companies that Donate to Nonprofits",
                    "source": "https://finance.yahoo.com/news/26-companies-donate-nonprofits-170818162.html"
                },
                {
                    "title": "Adobe stock rises as company appears ready to fight for Figma deal, analysts question growth",
                    "source": "https://finance.yahoo.com/m/10ff5a49-9d36-378e-a359-1b05da78043b/adobe-stock-rises-as-company.html"
                },
                {
                    "title": "Stock market today: Dow rallies as major banks race to rescue First Republic",
                    "source": "https://finance.yahoo.com/news/stock-market-today-dow-rallies-161858087.html"
                },
                {
                    "title": "Adobe (ADBE) Q1 Earnings & Revenues Beat Estimates, Rise Y/Y",
                    "source": "https://finance.yahoo.com/news/adobe-adbe-q1-earnings-revenues-153303753.html"
                },
                {
                    "title": "Why Adobe Stock Popped After Q1 Earnings",
                    "source": "https://finance.yahoo.com/m/e543931a-f49d-3c06-bd2e-1ed72ee90404/why-adobe-stock-popped-after.html"
                },
                {
                    "title": "These Stocks Are Moving the Most Today: First Republic, Credit Suisse, Proterra, Adobe, UiPath, and More",
                    "source": "https://finance.yahoo.com/m/d45e628a-4c1e-3dc2-b5c8-1f7752b5d09c/these-stocks-are-moving-the.html"
                },
                {
                    "title": "Adobe earnings: Digital content production, engagement driving our growth, company exec says",
                    "source": "https://finance.yahoo.com/video/adobe-earnings-digital-content-production-144625293.html"
                }
            ]
        },
        {
            "ticker": "ADI",
            "news_items": [
                {
                    "title": "Semtech (SMTC) Boosts Its IoT Reach With New Transceiver",
                    "source": "https://finance.yahoo.com/news/semtech-smtc-boosts-iot-reach-151003625.html"
                },
                {
                    "title": "With 88% institutional ownership, Analog Devices, Inc. (NASDAQ:ADI) is a favorite amongst the big guns",
                    "source": "https://finance.yahoo.com/news/88-institutional-ownership-analog-devices-110023196.html"
                },
                {
                    "title": "Amazon (AMZN) to Launch Kuiper Internet Satellites in 2024",
                    "source": "https://finance.yahoo.com/news/amazon-amzn-launch-kuiper-internet-190407704.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights Analog Devices, Microchip Technology and Silicon Laboratories",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-analog-124912190.html"
                },
                {
                    "title": "Volvo and MicroStrategy have been highlighted as Zacks Bull and Bear of the Day",
                    "source": "https://finance.yahoo.com/news/volvo-microstrategy-highlighted-zacks-bull-114811496.html"
                },
                {
                    "title": "Web of Secret Chip Deals Allegedly Help US Tech Flow to Russia",
                    "source": "https://finance.yahoo.com/news/secret-chip-deals-allegedly-help-040134984.html"
                },
                {
                    "title": "Investors Can't Get Enough of These 3 Tech Stocks in 2023",
                    "source": "https://finance.yahoo.com/news/investors-cant-enough-3-tech-190807752.html"
                },
                {
                    "title": "3 Solid Buys from the Semiconductor Industry",
                    "source": "https://finance.yahoo.com/news/3-solid-buys-semiconductor-industry-170005747.html"
                },
                {
                    "title": "Will Adobe's (ADBE) Q1 Earnings Gain From Digital Media?",
                    "source": "https://finance.yahoo.com/news/adobes-adbe-q1-earnings-gain-165004329.html"
                },
                {
                    "title": "Agilent (A) Boosts Digital Pathology Reach With Hamamatsu Deal",
                    "source": "https://finance.yahoo.com/news/agilent-boosts-digital-pathology-reach-162204870.html"
                }
            ]
        },
        {
            "ticker": "ADP",
            "news_items": [
                {
                    "title": "ADP to Announce Third Quarter Fiscal 2023 Financial Results on April 26, 2023",
                    "source": "https://finance.yahoo.com/news/adp-announce-third-quarter-fiscal-120000187.html"
                },
                {
                    "title": "Automatic Data Processing (ADP) Outpaces Stock Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/automatic-data-processing-adp-outpaces-231511347.html"
                },
                {
                    "title": "ADP National Employment Report: Private Sector Employment Increased by 242,000 Jobs in February; Annual Pay was Up 7.2%",
                    "source": "https://finance.yahoo.com/news/adp-national-employment-report-private-131500382.html"
                },
                {
                    "title": "The Zacks Analyst Blog Highlights Procter & Gamble, Applied Materials, Automatic Data Processing, Microchip Technology and Fastenal",
                    "source": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-procter-100010259.html"
                },
                {
                    "title": "14 Best American Dividend Stocks to Buy Now",
                    "source": "https://finance.yahoo.com/news/14-best-american-dividend-stocks-185032281.html"
                },
                {
                    "title": "Top Analyst Reports for Procter & Gamble, Applied Materials & Automatic Data Processing",
                    "source": "https://finance.yahoo.com/news/top-analyst-reports-procter-gamble-161704439.html"
                },
                {
                    "title": "12 High-Growth Forever Dividend Stocks to Buy",
                    "source": "https://finance.yahoo.com/news/12-high-growth-forever-dividend-202447720.html"
                },
                {
                    "title": "Income Investors Should Know That Automatic Data Processing, Inc. (NASDAQ:ADP) Goes Ex-Dividend Soon",
                    "source": "https://finance.yahoo.com/news/income-investors-know-automatic-data-120312272.html"
                },
                {
                    "title": "16 High Growth Non-Tech Stocks That Are Profitable",
                    "source": "https://finance.yahoo.com/news/16-high-growth-non-tech-190901202.html"
                },
                {
                    "title": "17 Biggest Payroll Companies in the World",
                    "source": "https://finance.yahoo.com/news/17-biggest-payroll-companies-world-211934496.html"
                }
            ]
        },
        {
            "ticker": "ADSK",
            "news_items": [
                {
                    "title": "Unity Software vs. Autodesk -- Which 3D Metaverse Stock Is a Better Buy?",
                    "source": "https://finance.yahoo.com/m/b427ec82-ee40-37d1-ad4a-f54ffdbe4d71/unity-software-vs.-autodesk.html"
                },
                {
                    "title": "Autodesk (NASDAQ:ADSK) pulls back 5.0% this week, but still delivers shareholders decent 8.1% CAGR over 5 years",
                    "source": "https://finance.yahoo.com/news/autodesk-nasdaq-adsk-pulls-back-120056344.html"
                },
                {
                    "title": "25 Largest Software Companies in the World by Revenue",
                    "source": "https://finance.yahoo.com/news/25-largest-software-companies-world-204009158.html"
                },
                {
                    "title": "These 3 Tech Stocks Are Building the Future",
                    "source": "https://finance.yahoo.com/m/21ade60c-27c3-3ccd-b1de-d6733640f96a/these-3-tech-stocks-are.html"
                },
                {
                    "title": "Autodesk (NASDAQ:ADSK) Is Looking To Continue Growing Its Returns On Capital",
                    "source": "https://finance.yahoo.com/news/autodesk-nasdaq-adsk-looking-continue-120049546.html"
                },
                {
                    "title": "CFOs Warily Watchand Waitfor an Acceleration in Fed Interest-Rate Hikes",
                    "source": "https://finance.yahoo.com/m/a9958ddc-354e-3309-b4fc-7bfffd7d26e7/cfos-warily-watch%E2%80%94and.html"
                },
                {
                    "title": "30 Biggest SaaS Companies in the World in 2023",
                    "source": "https://finance.yahoo.com/news/30-biggest-saas-companies-world-164842565.html"
                },
                {
                    "title": "Autodesk Stock Flexes Muscles; Profits Among Industry's Best",
                    "source": "https://finance.yahoo.com/m/d079efb9-a66f-3a4f-88e3-0b18715c39ee/autodesk-stock-flexes.html"
                },
                {
                    "title": "Autodesk, Inc. (NASDAQ:ADSK) Shares Could Be 21% Above Their Intrinsic Value Estimate",
                    "source": "https://finance.yahoo.com/news/autodesk-inc-nasdaq-adsk-shares-120023224.html"
                },
                {
                    "title": "3 Top Tech Stocks Ready for Bull Runs",
                    "source": "https://finance.yahoo.com/m/7a298557-61ea-3b42-a3c6-192773e4acc9/3-top-tech-stocks-ready-for.html"
                }
            ]
        },
        {
            "ticker": "AEP",
            "news_items": [
                {
                    "title": "AEP NAMES STURGESS SVP, CONTROLLER AND CHIEF ACCOUNTING OFFICER",
                    "source": "https://finance.yahoo.com/news/aep-names-sturgess-svp-controller-173000966.html"
                },
                {
                    "title": "Analyst Report: American Electric Power Co Inc",
                    "source": "https://finance.yahoo.com/m/a05ed1e5-71bf-3755-ae45-8338ddba7415/analyst-report%3A-american.html"
                },
                {
                    "title": "Market Digest: AEP, JWN, OGE, OXY, AWK",
                    "source": "https://finance.yahoo.com/m/71e7f27b-8130-3de3-9819-4aa00eeeebd4/market-digest%3A-aep%2C-jwn%2C-oge%2C.html"
                },
                {
                    "title": "Analyst Report: American Electric Power Company, Inc.",
                    "source": "https://finance.yahoo.com/m/bab2e612-0fb9-32d2-b755-9f6417d41d4d/analyst-report%3A-american.html"
                },
                {
                    "title": "Analyst Report: American Electric Power Company, Inc.",
                    "source": "https://finance.yahoo.com/m/4218d8e0-ae1e-3436-b612-184737c7a80a/analyst-report%3A-american.html"
                },
                {
                    "title": "AEP NAMES MARSH VICE PRESIDENT OF SAFETY AND HEALTH",
                    "source": "https://finance.yahoo.com/news/aep-names-marsh-vice-president-153100208.html"
                },
                {
                    "title": "Analyst Report: American Electric Power Company, Inc.",
                    "source": "https://finance.yahoo.com/m/4501bd31-b0cd-32d8-a24a-8440ef7431fc/analyst-report%3A-american.html"
                },
                {
                    "title": "Lightsource bp and AEP Energy Partners Sign Power Contract for 188 Megawatt Solar Farm in Indiana",
                    "source": "https://finance.yahoo.com/news/lightsource-bp-aep-energy-partners-183000760.html"
                },
                {
                    "title": "AEP REPORTS STRONG 2022 EARNINGS RESULTS",
                    "source": "https://finance.yahoo.com/news/aep-reports-strong-2022-earnings-115700951.html"
                },
                {
                    "title": "AEP SIGNS AGREEMENT TO SELL UNREGULATED RENEWABLES ASSETS",
                    "source": "https://finance.yahoo.com/news/aep-signs-agreement-sell-unregulated-225600512.html"
                }
            ]
        },
        {
            "ticker": "ALGN",
            "news_items": [
                {
                    "title": "BDX or ALGN: Which Is the Better Value Stock Right Now?",
                    "source": "https://finance.yahoo.com/news/bdx-algn-better-value-stock-164004405.html"
                },
                {
                    "title": "5 Stocks That Powered Nasdaq ETF Last Week",
                    "source": "https://finance.yahoo.com/news/5-stocks-powered-nasdaq-etf-150503505.html"
                },
                {
                    "title": "Why Is Align Technology (ALGN) Down 13% Since Last Earnings Report?",
                    "source": "https://finance.yahoo.com/news/why-align-technology-algn-down-163004167.html"
                },
                {
                    "title": "15 Best Short-Term Stocks To Buy Now",
                    "source": "https://finance.yahoo.com/news/15-best-short-term-stocks-143112369.html"
                },
                {
                    "title": "Here's Why You Should Hold on to Align Technology (ALGN) Now",
                    "source": "https://finance.yahoo.com/news/heres-why-hold-align-technology-161404068.html"
                },
                {
                    "title": "Has Align Technology, Inc.'s (NASDAQ:ALGN) Impressive Stock Performance Got Anything to Do With Its Fundamentals?",
                    "source": "https://finance.yahoo.com/news/align-technology-inc-nasdaq-algn-135609607.html"
                },
                {
                    "title": "COO vs. ALGN: Which Stock Is the Better Value Option?",
                    "source": "https://finance.yahoo.com/news/coo-vs-algn-stock-better-164004595.html"
                },
                {
                    "title": "President Joseph Hogan Just Bought 1.6% More Shares In Align Technology, Inc. (NASDAQ:ALGN)",
                    "source": "https://finance.yahoo.com/news/president-joseph-hogan-just-bought-120902451.html"
                },
                {
                    "title": "Daily  Vickers Top Buyers & Sellers for 02/10/2023",
                    "source": "https://finance.yahoo.com/m/6b0d67ee-6194-37de-9dbd-44d5ba9adf32/daily-%E2%80%93-vickers-top-buyers-%26.html"
                },
                {
                    "title": "Align Technology Appoints Karim Boussebaa, EVP and MD of iTero Scanner and Services BusinessYuval Shaked to Leave Align End of 2023",
                    "source": "https://finance.yahoo.com/news/align-technology-appoints-karim-boussebaa-215500796.html"
                }
            ]
        },
        {
            "ticker": "AMAT",
            "news_items": [
                {
                    "title": "Applied Materials Joins SEMIs Semiconductor Climate Consortium Governing Council",
                    "source": "https://finance.yahoo.com/news/applied-materials-joins-semi-semiconductor-141500644.html"
                },
                {
                    "title": "2 Growth Stocks to Hold for the Next 10 Years",
                    "source": "https://finance.yahoo.com/m/8b022a2b-a2df-32ad-9115-787c5e105ad3/2-growth-stocks-to-hold-for.html"
                },
                {
                    "title": "Applied Materials Makes the Clean200(TM) List",
                    "source": "https://finance.yahoo.com/news/applied-materials-makes-clean200-tm-131000037.html"
                },
                {
                    "title": "Analyst Report: Applied Materials Inc.",
                    "source": "https://finance.yahoo.com/m/2bdd7b6f-6eeb-3ea5-abe9-2a85d36a7e80/analyst-report%3A-applied.html"
                },
                {
                    "title": "Technical Assessment: Bearish in the Intermediate-Term",
                    "source": "https://finance.yahoo.com/m/e7052d6a-0eee-3d48-b2d9-2b214b27bfbc/technical-assessment%3A-bearish.html"
                },
                {
                    "title": "Market Digest: AMAT, CAKE, FSLR, MCD",
                    "source": "https://finance.yahoo.com/m/5e53adfd-2f67-33a1-ba24-0a3e37e0f0e7/market-digest%3A-amat%2C-cake%2C.html"
                },
                {
                    "title": "Applied Materials Authorizes Additional $10B Buyback, Hikes Quarterly Dividend",
                    "source": "https://finance.yahoo.com/news/applied-materials-authorizes-additional-10b-153253424.html"
                },
                {
                    "title": "15 Best Artificial Intelligence (AI) Stocks To Buy According to Analysts",
                    "source": "https://finance.yahoo.com/news/15-best-artificial-intelligence-ai-151432463.html"
                },
                {
                    "title": "Applied Materials Increases Dividend and Buybacks. Why Its Positive About Chips.",
                    "source": "https://finance.yahoo.com/m/3868fcc1-97dd-31ac-806a-c814d771e507/applied-materials-increases.html"
                },
                {
                    "title": "UPDATE 1-Applied Materials announces new $10 bln share buyback plan, hikes dividend",
                    "source": "https://finance.yahoo.com/news/1-applied-materials-announces-10-115530125.html"
                }
            ]
        },
        {
            "ticker": "AMD",
            "news_items": [
                {
                    "title": "IBD Screen Of The Day: AMD Surges Past Buy Point, Chipotle Boast Rising Profit Estimates",
                    "source": "https://finance.yahoo.com/m/a560fe1c-dfbd-378d-89d9-006fb7fce9c4/ibd-screen-of-the-day%3A-amd.html"
                },
                {
                    "title": "Why AMD, Intel, and Nvidia Stock All Rallied on Thursday",
                    "source": "https://finance.yahoo.com/m/47ef9038-9565-30c6-b9df-72fd42399eda/why-amd%2C-intel%2C-and-nvidia.html"
                },
                {
                    "title": "The Worst Is Over For PC, Smartphone Chip Stocks, Analyst Says",
                    "source": "https://finance.yahoo.com/m/6b0a4cb4-906a-304c-9351-2b6b588768d5/the-worst-is-over-for-pc%2C.html"
                },
                {
                    "title": "Why Microsoft, Advanced Micro Devices, and Qualcomm Were Surging Today",
                    "source": "https://finance.yahoo.com/m/d51d8ee8-f58b-3041-bbe5-202ce0d8033b/why-microsoft%2C-advanced-micro.html"
                },
                {
                    "title": "Is AMD Stock A Buy Before Chipmaker's March-Quarter Report?",
                    "source": "https://finance.yahoo.com/m/776dffee-64af-3502-ad20-38a315d1693e/is-amd-stock-a-buy-before.html"
                },
                {
                    "title": "20 Largest Semiconductor Companies in the World",
                    "source": "https://finance.yahoo.com/news/20-largest-semiconductor-companies-world-113454953.html"
                },
                {
                    "title": "Algos Gone Wild, Credit Suisse, Macro Misses, Fed Funding, Trading Meta and AMD",
                    "source": "https://finance.yahoo.com/m/16bf31b0-cbf5-3743-8538-a827ad8a9136/algos-gone-wild%2C-credit.html"
                },
                {
                    "title": "Semiconductor Stocks Climb Yet Inventories Bedevil Chip Industry; A Reality Check May Be Coming",
                    "source": "https://finance.yahoo.com/m/483c54ea-20c2-3a67-aa70-b6bee8eda642/semiconductor-stocks-climb.html"
                },
                {
                    "title": "IBD Screen Of The Day: AMD, Chipotle Boast Rising Profit Estimates",
                    "source": "https://finance.yahoo.com/m/a560fe1c-dfbd-378d-89d9-006fb7fce9c4/ibd-screen-of-the-day%3A-amd%2C.html"
                },
                {
                    "title": "Meta Platforms Is Dominating Amazon in This Revolutionary Technology",
                    "source": "https://finance.yahoo.com/m/ef2c0163-e92d-3dc8-ad15-ed494fc9ccf3/meta-platforms-is-dominating.html"
                }
            ]
        },
        {
            "ticker": "AMGN",
            "news_items": [
                {
                    "title": "Amgen to cut about 450 jobs in second round of layoffs this year",
                    "source": "https://finance.yahoo.com/m/0545e833-1db9-33c4-83b0-23afbb6f3cf0/amgen-to-cut-about-450-jobs.html"
                },
                {
                    "title": "Amgen to cut 450 jobs in second round of layoffs this year",
                    "source": "https://finance.yahoo.com/news/amgen-cut-450-jobs-second-004746772.html"
                },
                {
                    "title": "UPDATE 2-Amgen to cut 450 jobs in second round of layoffs this year",
                    "source": "https://finance.yahoo.com/news/1-amgen-cut-450-jobs-004523229.html"
                },
                {
                    "title": "Is It Time to Buy the Dow Jones' 3 Worst-Performing February (and Now March) Stocks?",
                    "source": "https://finance.yahoo.com/m/161e8a18-fd67-3e29-9400-7011273e9d46/is-it-time-to-buy-the-dow.html"
                },
                {
                    "title": "Amgen (AMGN) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/amgen-amgn-gains-market-dips-214509448.html"
                },
                {
                    "title": "2 Top Biotech Stocks to Buy Right Now",
                    "source": "https://finance.yahoo.com/m/7da4d1b4-b921-3139-8ca8-94889611c71d/2-top-biotech-stocks-to-buy.html"
                },
                {
                    "title": "25 Biggest Pharmaceutical Companies in the World",
                    "source": "https://finance.yahoo.com/news/25-biggest-pharmaceutical-companies-world-022005023.html"
                },
                {
                    "title": "Amgen (AMGN) Stock Sinks As Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/amgen-amgn-stock-sinks-market-215009689.html"
                },
                {
                    "title": "Amgen Faces Lawsuit For Hiding Its Stupendous Tax Bill Of $10B",
                    "source": "https://finance.yahoo.com/news/amgen-faces-lawsuit-hiding-stupendous-204023813.html"
                },
                {
                    "title": "2 Stocks to Buy Near Their 52-Week Lows That Could Help You Beat The Market",
                    "source": "https://finance.yahoo.com/m/ba0537c1-efbf-36e1-9d0f-a8aee01f0d62/2-stocks-to-buy-near-their.html"
                }
            ]
        },
        {
            "ticker": "AMZN",
            "news_items": [
                {
                    "title": "Why Amazon Stock Jumped Today",
                    "source": "https://finance.yahoo.com/m/7cbe975b-58c3-3c63-b64c-8fa627773bf1/why-amazon-stock-jumped-today.html"
                },
                {
                    "title": "4 Reasons to Delete Your Debit Card From Amazon",
                    "source": "https://finance.yahoo.com/m/cd4e657f-c6fd-33ee-a007-a1f8bb560640/4-reasons-to-delete-your.html"
                },
                {
                    "title": "Amazon isn't backing down on in-person work policy, internal FAQ shows",
                    "source": "https://finance.yahoo.com/m/561f11dc-32fb-367a-83e0-3b3cfb0e1c66/amazon-isn%27t-backing-down-on.html"
                },
                {
                    "title": "26 Companies that Donate to Nonprofits",
                    "source": "https://finance.yahoo.com/news/26-companies-donate-nonprofits-170818162.html"
                },
                {
                    "title": "Amazon is shutting down Kindle Newsstand, getting out of the news and information business",
                    "source": "https://finance.yahoo.com/news/amazon-shutting-down-kindle-newsstand-150525503.html"
                },
                {
                    "title": "Amazon's Next Pillar Could Be Generating Billions",
                    "source": "https://finance.yahoo.com/m/f530ff5d-66fa-3833-b2fc-1dfe1d24d929/amazon%27s-next-pillar-could-be.html"
                },
                {
                    "title": "The Threat of E-Commerce Doesn't Scare This Unstoppable Business",
                    "source": "https://finance.yahoo.com/m/1ef101fd-dcec-3e59-afc9-a41152eb7c07/the-threat-of-e-commerce.html"
                },
                {
                    "title": "3 No-Brainer Stocks I'd Buy Right Now Without Hesitation",
                    "source": "https://finance.yahoo.com/m/2901093f-6798-318a-987b-43d2526bc77e/3-no-brainer-stocks-i%27d-buy.html"
                },
                {
                    "title": "The Market Is Sleeping On This Stock; Here's Why You Shouldn't",
                    "source": "https://finance.yahoo.com/m/f68b2558-b094-33d3-9ec4-0db4accdd938/the-market-is-sleeping-on.html"
                },
                {
                    "title": "Nasdaq Bear Market: 2 Warren Buffett Growth Stocks to Buy in 2023",
                    "source": "https://finance.yahoo.com/m/a15033cd-3181-31c8-8a07-6c4c2b25a227/nasdaq-bear-market%3A-2-warren.html"
                }
            ]
        },
        {
            "ticker": "ANSS",
            "news_items": [
                {
                    "title": "Is ANSYS, Inc.'s (NASDAQ:ANSS) Recent Stock Performance Tethered To Its Strong Fundamentals?",
                    "source": "https://finance.yahoo.com/news/ansys-inc-nasdaq-anss-recent-124612616.html"
                },
                {
                    "title": "Ansys Announces Inaugural Open Call to Academia for Funded Curriculum Proposals",
                    "source": "https://finance.yahoo.com/news/ansys-announces-inaugural-open-call-140000103.html"
                },
                {
                    "title": "Is ANSYS (ANSS) Stock Attractively Valued?",
                    "source": "https://finance.yahoo.com/news/ansys-anss-stock-attractively-valued-071904909.html"
                },
                {
                    "title": "3 Brilliant Stocks to Buy Now and Hold Forever",
                    "source": "https://finance.yahoo.com/m/cbf4a5a2-76d8-3bf5-b412-3d981b2e78cb/3-brilliant-stocks-to-buy-now.html"
                },
                {
                    "title": "Why Ansys Stock Soared in February",
                    "source": "https://finance.yahoo.com/m/f938273e-e9b5-3f15-bd05-d308dbc70e73/why-ansys-stock-soared-in.html"
                },
                {
                    "title": "With EPS Growth And More, ANSYS (NASDAQ:ANSS) Makes An Interesting Case",
                    "source": "https://finance.yahoo.com/news/eps-growth-more-ansys-nasdaq-102955202.html"
                },
                {
                    "title": "ANSYS Full Year 2022 Earnings: Beats Expectations",
                    "source": "https://finance.yahoo.com/news/ansys-full-2022-earnings-beats-102943763.html"
                },
                {
                    "title": "Analyst Report: ANSYS, Inc.",
                    "source": "https://finance.yahoo.com/m/1c07e8e3-f7be-3a2f-a109-6ae96a8ae83f/analyst-report%3A-ansys%2C-inc..html"
                },
                {
                    "title": "Why Shares in Ansys Soared Today",
                    "source": "https://finance.yahoo.com/m/963e7417-8c1f-33ff-8fe3-1399768ce246/why-shares-in-ansys-soared.html"
                },
                {
                    "title": "ANSYS (ANSS) Q4 Earnings Beat Estimates, Revenues Up Y/Y",
                    "source": "https://finance.yahoo.com/news/ansys-anss-q4-earnings-beat-142402894.html"
                }
            ]
        },
        {
            "ticker": "ASML",
            "news_items": [
                {
                    "title": "Forget Tesla - The Biggest Tech Opportunities Of 2023",
                    "source": "https://finance.yahoo.com/news/forget-tesla-biggest-tech-opportunities-220000980.html"
                },
                {
                    "title": "ASML publishes agenda Annual General Meeting 2023",
                    "source": "https://finance.yahoo.com/news/asml-publishes-agenda-annual-general-163000757.html"
                },
                {
                    "title": "ASML reports transactions under its current share buyback program",
                    "source": "https://finance.yahoo.com/news/asml-reports-transactions-under-current-130000530.html"
                },
                {
                    "title": "Applied Materials Announces New Machines to Complement ASML's EUV, and the Market Totally Missed the Point",
                    "source": "https://finance.yahoo.com/m/d644e21c-518d-3a1e-b57b-8ce35664667c/applied-materials-announces.html"
                },
                {
                    "title": "Exclusive-Chip equipment maker ASML's suppliers eye Asia plants outside China amid tensions",
                    "source": "https://finance.yahoo.com/news/exclusive-chip-equipment-maker-asmls-143447357.html"
                },
                {
                    "title": "How This Investor Finds Quality Stocks. ASML and Unilever Are Some of His Favorites.",
                    "source": "https://finance.yahoo.com/m/8c2eefbb-e7d2-3879-a852-ff6264590f53/how-this-investor-finds.html"
                },
                {
                    "title": "ASML, China customers haunted by uncertainty on new Dutch chip export rules",
                    "source": "https://finance.yahoo.com/news/asml-china-customers-haunted-uncertainty-203655094.html"
                },
                {
                    "title": "Dutch trade minister: China protest over export rules is 'understandable'",
                    "source": "https://finance.yahoo.com/news/dutch-trade-minister-china-protest-174042537.html"
                },
                {
                    "title": "Dutch Seeku00a0Middle Ground as US-China Chip Dispute Escalates",
                    "source": "https://finance.yahoo.com/news/dutch-seek-middle-ground-us-171256222.html"
                },
                {
                    "title": "Chips/ASML: Dutch ban leaves China unequivocally unequipped",
                    "source": "https://finance.yahoo.com/m/acb881cc-dc82-3399-90fc-43d682dc5502/chips%2Fasml%3A-dutch-ban-leaves.html"
                }
            ]
        },
        {
            "ticker": "ATVI",
            "news_items": [
                {
                    "title": "Take-Two's (TTWO) Unit 2K Announces the Release of WWE 2K23",
                    "source": "https://finance.yahoo.com/news/twos-ttwo-unit-2k-announces-153703869.html"
                },
                {
                    "title": "Activision Blizzard, Inc (ATVI) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/activision-blizzard-inc-atvi-gains-220010534.html"
                },
                {
                    "title": "Microsoft signs Japanese licensing agreement amid Activision deal",
                    "source": "https://finance.yahoo.com/news/microsoft-signs-japanese-licensing-agreement-130841259.html"
                },
                {
                    "title": "Microsoft signs Japanese licensing agreement amid Activision deal",
                    "source": "https://finance.yahoo.com/news/microsoft-signs-japanese-licensing-agreement-130000970.html"
                },
                {
                    "title": "Microsoft (MSFT) Inks Xbox Deal With Boosteroid Cloud Service",
                    "source": "https://finance.yahoo.com/news/microsoft-msft-inks-xbox-deal-125012722.html"
                },
                {
                    "title": "Microsoft Forges Long-Term Deal With Boosteroid After Nintendo, Nvidia To Dispel Concerns Over Activision Deal",
                    "source": "https://finance.yahoo.com/news/microsoft-forges-long-term-deal-174842754.html"
                },
                {
                    "title": "Microsoft inks Xbox game deal with Boosteroid cloud service",
                    "source": "https://finance.yahoo.com/news/microsoft-inks-xbox-game-deal-141530049.html"
                },
                {
                    "title": "UPDATE 1-Microsoft inks licensing deal with cloud gaming provider Boosteroid",
                    "source": "https://finance.yahoo.com/news/1-microsoft-inks-licensing-deal-133917010.html"
                },
                {
                    "title": "Microsoft Signs Third Call of Duty Deal as It Seeks Approval to Buy Activision Blizzard",
                    "source": "https://finance.yahoo.com/m/bc7feba1-387c-3b3a-be8a-303b908e9819/microsoft-signs-third-%E2%80%98call.html"
                },
                {
                    "title": "Microsoft inks licensing deal with cloud gaming provider Boosteroid",
                    "source": "https://finance.yahoo.com/news/microsoft-signs-licensing-deal-cloud-130414512.html"
                }
            ]
        },
        {
            "ticker": "AVGO",
            "news_items": [
                {
                    "title": "In The Need For Speed, Chipmaker Broadcom Leads The Push For Silicon Photonics",
                    "source": "https://finance.yahoo.com/m/b71559f7-61e6-33f0-944c-4a7e71419e68/in-the-need-for-speed%2C.html"
                },
                {
                    "title": "10 Stocks ChatGPT Says Will Make Me Rich in 10 Years",
                    "source": "https://finance.yahoo.com/news/10-stocks-chatgpt-says-rich-143852562.html"
                },
                {
                    "title": "Broadcom Inc. (NASDAQ:AVGO) Passed Our Checks, And It's About To Pay A US$4.60 Dividend",
                    "source": "https://finance.yahoo.com/news/broadcom-inc-nasdaq-avgo-passed-102109359.html"
                },
                {
                    "title": "Semiconductor Stocks Climb Yet Inventories Bedevil Chip Industry; A Reality Check May Be Coming",
                    "source": "https://finance.yahoo.com/m/483c54ea-20c2-3a67-aa70-b6bee8eda642/semiconductor-stocks-climb.html"
                },
                {
                    "title": "Broadcom Now Shipping Worlds First 51.2 Tbps Switch in Production Volume",
                    "source": "https://finance.yahoo.com/news/broadcom-now-shipping-world-first-130000630.html"
                },
                {
                    "title": "Web of Secret Chip Deals Allegedly Help US Tech Flow to Russia",
                    "source": "https://finance.yahoo.com/news/secret-chip-deals-allegedly-help-040134984.html"
                },
                {
                    "title": "EU watchdog extends deadline on Broadcom-VMware decision to June 21",
                    "source": "https://finance.yahoo.com/news/eu-watchdog-extends-deadline-broadcom-143132968.html"
                },
                {
                    "title": "13 Small Publicly Traded Semiconductor Companies on the Verge of Big Gains",
                    "source": "https://finance.yahoo.com/news/13-small-publicly-traded-semiconductor-192937634.html"
                },
                {
                    "title": "Uncovering the AI Potential of Broadcom Stock",
                    "source": "https://finance.yahoo.com/m/232b1680-5ebc-3641-bd70-a2e99c3f5ad1/uncovering-the-ai-potential.html"
                },
                {
                    "title": "These 3 Tech Companies Generate Substantial Cash",
                    "source": "https://finance.yahoo.com/news/3-tech-companies-generate-substantial-215109665.html"
                }
            ]
        },
        {
            "ticker": "AZN",
            "news_items": [
                {
                    "title": "Astrazeneca (AZN) Could Be a Great Choice",
                    "source": "https://finance.yahoo.com/news/astrazeneca-azn-could-great-choice-154503926.html"
                },
                {
                    "title": "AstraZeneca (AZN) Stock Up 5% in a Year: What Awaits in 2023?",
                    "source": "https://finance.yahoo.com/news/astrazeneca-azn-stock-5-awaits-142202585.html"
                },
                {
                    "title": "FOCUS-How GSK plans to replenish its depleted medicine cabinet",
                    "source": "https://finance.yahoo.com/news/focus-gsk-plans-replenish-depleted-060000907.html"
                },
                {
                    "title": "Astrazeneca (AZN) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/astrazeneca-azn-gains-market-dips-221510235.html"
                },
                {
                    "title": "AstraZeneca (AZN) Posts Positive Data From Lung Cancer Studies",
                    "source": "https://finance.yahoo.com/news/astrazeneca-azn-posts-positive-data-152603308.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights J&J, Novo Nordisk, AstraZeneca, Novartis and Sanofi",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-j-093809856.html"
                },
                {
                    "title": "Compugen Ltd. (NASDAQ:CGEN) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/compugen-ltd-nasdaq-cgen-q4-070819522.html"
                },
                {
                    "title": "AstraZenceca's Tagrisso Shows Survival Benefit In Early-Stage Lung Cancer Settings",
                    "source": "https://finance.yahoo.com/news/astrazencecas-tagrisso-shows-survival-benefit-153652906.html"
                },
                {
                    "title": "AstraZeneca's Immunotherapy Imfinzi Shows Improvement In Survival Chances In Lung Cancer Patients",
                    "source": "https://finance.yahoo.com/news/astrazenecas-immunotherapy-imfinzi-shows-improvement-153447767.html"
                },
                {
                    "title": "5 Large Drug Stocks to Watch as Sector Picks Up in 2023",
                    "source": "https://finance.yahoo.com/news/5-large-drug-stocks-watch-130001643.html"
                }
            ]
        },
        {
            "ticker": "BIIB",
            "news_items": [
                {
                    "title": "Alzheimer's Association Launches Grassroots Level Lobbying For Medicare Coverage Of Alzheimer's Treatments",
                    "source": "https://finance.yahoo.com/news/alzheimers-association-launches-grassroots-level-180051378.html"
                },
                {
                    "title": "Biogen (BIIB) Up 29% in a Year Despite Multiple Challenges",
                    "source": "https://finance.yahoo.com/news/biogen-biib-29-despite-multiple-124312226.html"
                },
                {
                    "title": "Biogen Receives Favorable Decision from Court of Justice of the European Unionu00a0Relating to TECFIDERAu00ae (dimethyl fumarate) Regulatory Data and Marketing Protection",
                    "source": "https://finance.yahoo.com/news/biogen-receives-favorable-decision-court-103000006.html"
                },
                {
                    "title": "Biogen Inc. (BIIB) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/biogen-inc-biib-gains-market-220010543.html"
                },
                {
                    "title": "Biogen Inc. (BIIB) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/biogen-inc-biib-gains-lags-221510565.html"
                },
                {
                    "title": "The VA Will Pay for Leqembi. Its a Step in Right Direction for Biogen.",
                    "source": "https://finance.yahoo.com/m/9461bc98-edd2-3874-9784-11561cd6a690/the-va-will-pay-for-leqembi..html"
                },
                {
                    "title": "1 Reason to Buy Biogen Stock, and 1 Reason to Sell",
                    "source": "https://finance.yahoo.com/m/d799cdc6-f62e-3c55-99d3-2338892034c4/1-reason-to-buy-biogen-stock%2C.html"
                },
                {
                    "title": "Veterans Health to cover Eisai, Biogens new Alzheimers drug",
                    "source": "https://finance.yahoo.com/m/13c1abca-6497-32b5-a163-b0a9a05a492e/veterans-health-to-cover.html"
                },
                {
                    "title": "Biogen Appoints Chuck Triano as Head of Investor Relations",
                    "source": "https://finance.yahoo.com/news/biogen-appoints-chuck-triano-head-113000287.html"
                },
                {
                    "title": "Veterans Affairs to Be First Major Insurer to Cover Alzheimers Drug Leqembi",
                    "source": "https://finance.yahoo.com/m/2aa0d426-c844-372c-8d97-cda8ee6f71ac/veterans-affairs-to-be-first.html"
                }
            ]
        },
        {
            "ticker": "BKNG",
            "news_items": [
                {
                    "title": "DTC or BKNG: Which Is the Better Value Stock Right Now?",
                    "source": "https://finance.yahoo.com/news/dtc-bkng-better-value-stock-154003014.html"
                },
                {
                    "title": "This Hotel Chain Has Spring Break Deals of Up to 20% for Select Properties Through June 3",
                    "source": "https://finance.yahoo.com/m/9a7fbf0b-063e-3115-a552-95cffba0c9b7/this-hotel-chain-has-spring.html"
                },
                {
                    "title": "Are Retail-Wholesale Stocks Lagging  Booking Holdings (BKNG) This Year?",
                    "source": "https://finance.yahoo.com/news/retail-wholesale-stocks-lagging-booking-144002008.html"
                },
                {
                    "title": "TUI Drives Loyalty Through New Connected Trip Tours",
                    "source": "https://finance.yahoo.com/news/tui-drives-loyalty-connected-trip-150000744.html"
                },
                {
                    "title": "Earnings Estimates Moving Higher for Booking Holdings (BKNG): Time to Buy?",
                    "source": "https://finance.yahoo.com/news/earnings-estimates-moving-higher-booking-172005368.html"
                },
                {
                    "title": "Want Better Customer Service? Join the (Membership) Club",
                    "source": "https://finance.yahoo.com/m/de5f9d2c-fa06-3235-b6ec-ddb26d80f076/want-better-customer-service%3F.html"
                },
                {
                    "title": "Booking Holdings Trends in 6 Charts",
                    "source": "https://finance.yahoo.com/news/booking-holdings-trends-6-charts-205500858.html"
                },
                {
                    "title": "Booking Holdings Inc. (BKNG) Hits Fresh High: Is There Still Room to Run?",
                    "source": "https://finance.yahoo.com/news/booking-holdings-inc-bkng-hits-141502096.html"
                },
                {
                    "title": "Booking Holdings (BKNG) Upgraded to Buy: Here's What You Should Know",
                    "source": "https://finance.yahoo.com/news/booking-holdings-bkng-upgraded-buy-170005037.html"
                },
                {
                    "title": "What Did Investors Like About Nvidia's Latest Update?",
                    "source": "https://finance.yahoo.com/m/f58cc118-a67e-3049-b0f9-20de84f3ad7b/what-did-investors-like-about.html"
                }
            ]
        },
        {
            "ticker": "BKR",
            "news_items": [
                {
                    "title": "Baker Hughes Foundation Contributes $75,000 to Banco Alimentare Onlus Foundation",
                    "source": "https://finance.yahoo.com/news/baker-hughes-foundation-contributes-75-121000884.html"
                },
                {
                    "title": "Analyst Report: Baker Hughes Company",
                    "source": "https://finance.yahoo.com/m/a66a8eb0-626c-3994-80de-37f087ad2101/analyst-report%3A-baker-hughes.html"
                },
                {
                    "title": "3D Systems' (DDD) Oqton, Baker Hughes to Offer Software Suite",
                    "source": "https://finance.yahoo.com/news/3d-systems-ddd-oqton-baker-133001126.html"
                },
                {
                    "title": "Baker Hughes (BKR) to Offer Additive Manufacturing Solutions",
                    "source": "https://finance.yahoo.com/news/baker-hughes-bkr-offer-additive-112411652.html"
                },
                {
                    "title": "Baker Hughes Announces Date for First Quarter 2023 Earnings Release and Webcast",
                    "source": "https://finance.yahoo.com/news/baker-hughes-announces-date-first-120000294.html"
                },
                {
                    "title": "Baker Hughes data show a 4th straight weekly decline in active U.S. oil-drilling rigs",
                    "source": "https://finance.yahoo.com/m/fc793365-a849-3b15-910f-258be7d9901d/baker-hughes-data-show-a-4th.html"
                },
                {
                    "title": "Baker Hughes (BKR) to Develop DAC Technology With HIF Global",
                    "source": "https://finance.yahoo.com/news/baker-hughes-bkr-develop-dac-125112970.html"
                },
                {
                    "title": "Baker Hughes to develop carbon capture tech with HIF Global",
                    "source": "https://finance.yahoo.com/news/baker-hughes-develop-carbon-capture-135133165.html"
                },
                {
                    "title": "Baker Hughes and HIF Global to Collaborate on Direct Air Capture Technology",
                    "source": "https://finance.yahoo.com/news/baker-hughes-hif-global-collaborate-130000798.html"
                },
                {
                    "title": "C3.ai, Inc. (NYSE:AI) Q3 2023 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/c3-ai-inc-nyse-ai-031259808.html"
                }
            ]
        },
        {
            "ticker": "CDNS",
            "news_items": [
                {
                    "title": "Looking for Computer and Technology Stocks? The Zacks Rank Can Help You Find Winners",
                    "source": "https://finance.yahoo.com/news/looking-computer-technology-stocks-zacks-134001253.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights Salesforce, Cadence Design Systems and Blackbaud",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-salesforce-124112650.html"
                },
                {
                    "title": "3 Software Stocks to Watch Amid Strengthening Industry Trends",
                    "source": "https://finance.yahoo.com/news/3-software-stocks-watch-amid-171605204.html"
                },
                {
                    "title": "Cadence (CDNS) Up 2.2% Since Last Earnings Report: Can It Continue?",
                    "source": "https://finance.yahoo.com/news/cadence-cdns-2-2-since-153003673.html"
                },
                {
                    "title": "Top Funds Can't Get Enough Of This Breakout AI Stock",
                    "source": "https://finance.yahoo.com/m/20be9082-1e56-3667-a7c1-8b4b88961aa1/top-funds-can%27t-get-enough-of.html"
                },
                {
                    "title": "Meet the 2022 Cadence Women in Technology Scholarship Recipients",
                    "source": "https://finance.yahoo.com/news/meet-2022-cadence-women-technology-142500917.html"
                },
                {
                    "title": "Is Cadence (CDNS) a Solid Growth Stock? 3 Reasons to Think Yes",
                    "source": "https://finance.yahoo.com/news/cadence-cdns-solid-growth-stock-174505837.html"
                },
                {
                    "title": "The Zacks Analyst Blog Highlights Airbnb, Salesforce, Meta Platforms, Palo Alto Networks and Cadence Design Systems",
                    "source": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-airbnb-095509103.html"
                },
                {
                    "title": "The Semiconductor Industry is Showing Relative Strength: 2 Stocks to Join the Rally",
                    "source": "https://finance.yahoo.com/news/semiconductor-industry-showing-relative-strength-211709439.html"
                },
                {
                    "title": "Cadence to Invest $50 Million to Support Racial Equity",
                    "source": "https://finance.yahoo.com/news/cadence-invest-50-million-support-204500074.html"
                }
            ]
        },
        {
            "ticker": "CEG",
            "news_items": [
                {
                    "title": "Constellation CEO to Call on Congress to Support Reliable, Zero-Carbon Nuclear Energy by Investing in Domestic Fuel Sources",
                    "source": "https://finance.yahoo.com/news/constellation-ceo-call-congress-support-130000856.html"
                },
                {
                    "title": "Constellation Starts Production at Nations First One Megawatt Demonstration Scale Nuclear-Powered Clean Hydrogen Facility",
                    "source": "https://finance.yahoo.com/news/constellation-starts-production-nation-first-130000857.html"
                },
                {
                    "title": "Constellations Nuclear Fleet Outperformed as Fossil Plants in Nations Largest Grid Failed During Winter Storm Emergency",
                    "source": "https://finance.yahoo.com/news/constellation-nuclear-fleet-outperformed-fossil-143000418.html"
                },
                {
                    "title": "Constellation Making Major Investment in Two Illinois Nuclear Plants to Increase Clean Energy Output",
                    "source": "https://finance.yahoo.com/news/constellation-making-major-investment-two-143200964.html"
                },
                {
                    "title": "Constellation Reports Fourth Quarter and Full Year 2022 Results and Initiates 2023 Financial Outlook",
                    "source": "https://finance.yahoo.com/news/constellation-reports-fourth-quarter-full-114300812.html"
                },
                {
                    "title": "Hourly Carbon-Free Energy Matching Boosted by New PJM Tracking System",
                    "source": "https://finance.yahoo.com/news/hourly-carbon-free-energy-matching-163000224.html"
                },
                {
                    "title": "Constellation, Union Partners Sign Pledge to Increase Diversity Among Historically Underrepresented Groups",
                    "source": "https://finance.yahoo.com/news/constellation-union-partners-sign-pledge-130000539.html"
                },
                {
                    "title": "Constellation Marks First Anniversary with $1 Million Powering Change Workforce Development Initiative",
                    "source": "https://finance.yahoo.com/news/constellation-marks-first-anniversary-1-130000566.html"
                },
                {
                    "title": "Tesla, Nvidia Lead Today's Biggest S&P 500 Stock Market Losers",
                    "source": "https://finance.yahoo.com/m/9b132a05-fedf-39d4-a44a-38e737579f99/tesla%2C-nvidia-lead-today%27s.html"
                },
                {
                    "title": "Quaker Houghton supports clean energy with Constellation advancing its goal of achieving carbon neutrality",
                    "source": "https://finance.yahoo.com/news/quaker-houghton-supports-clean-energy-213000038.html"
                }
            ]
        },
        {
            "ticker": "CHTR",
            "news_items": [
                {
                    "title": "Is Charter Communications, Inc. (NASDAQ:CHTR) Trading At A 31% Discount?",
                    "source": "https://finance.yahoo.com/news/charter-communications-inc-nasdaq-chtr-110048669.html"
                },
                {
                    "title": "SPECTRUM BUSINESSu00ae OFFERS SMB CUSTOMERS FREE UNLIMITED SPECTRUM MOBILE FOR ONE YEAR",
                    "source": "https://finance.yahoo.com/news/spectrum-business-offers-smb-customers-152000499.html"
                },
                {
                    "title": "Analyst Report: Charter Communications, Inc.",
                    "source": "https://finance.yahoo.com/m/28f8dc0a-4fbb-340f-afd7-edca9f2b2e13/analyst-report%3A-charter.html"
                },
                {
                    "title": "A Closer Look At Charter Communications, Inc.'s (NASDAQ:CHTR) Impressive ROE",
                    "source": "https://finance.yahoo.com/news/closer-look-charter-communications-inc-110030662.html"
                },
                {
                    "title": "T-Mobile Doesn't See Cable's Competition in the Wireless Game As a Major Threat",
                    "source": "https://finance.yahoo.com/m/5160580d-7766-3ee4-9389-29ea72e79014/t-mobile-doesn%27t-see-cable%27s.html"
                },
                {
                    "title": "The past year for Charter Communications (NASDAQ:CHTR) investors has not been profitable",
                    "source": "https://finance.yahoo.com/news/past-charter-communications-nasdaq-chtr-110031327.html"
                },
                {
                    "title": "Charter to Participate in Morgan Stanley Technology, Media & Telecom Conference",
                    "source": "https://finance.yahoo.com/news/charter-participate-morgan-stanley-technology-150000849.html"
                },
                {
                    "title": "What Does Charter Communications, Inc.'s (NASDAQ:CHTR) Share Price Indicate?",
                    "source": "https://finance.yahoo.com/news/does-charter-communications-inc-nasdaq-110026351.html"
                },
                {
                    "title": "4 Stocks to Watch From a Challenging Cable Television Industry",
                    "source": "https://finance.yahoo.com/news/4-stocks-watch-challenging-cable-142102266.html"
                },
                {
                    "title": "Should You Hold Charter Communications (CHTR)?",
                    "source": "https://finance.yahoo.com/news/hold-charter-communications-chtr-131527386.html"
                }
            ]
        },
        {
            "ticker": "CMCSA",
            "news_items": [
                {
                    "title": "Comcast (CMCSA) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/comcast-cmcsa-gains-market-dips-220010637.html"
                },
                {
                    "title": "3 Reasons Why I Bought Nintendo Stock Last Week",
                    "source": "https://finance.yahoo.com/m/8b097ea6-131b-3f47-af41-ca95b537e30f/3-reasons-why-i-bought.html"
                },
                {
                    "title": "Comcast NBCUniversal LIFT Labs Launches New Theme-Driven Accelerator",
                    "source": "https://finance.yahoo.com/news/comcast-nbcuniversal-lift-labs-launches-140000838.html"
                },
                {
                    "title": "Iger is stuck: Disney chief debates future of Hulu and ESPN",
                    "source": "https://finance.yahoo.com/m/e7c03adb-c2e9-3e74-9fbc-01f5b96e2e91/%E2%80%98iger-is-stuck%E2%80%99%3A-disney-chief.html"
                },
                {
                    "title": "Iger is stuck: Disney CEO debates future of Hulu and ESPN",
                    "source": "https://finance.yahoo.com/m/e7c03adb-c2e9-3e74-9fbc-01f5b96e2e91/%E2%80%98iger-is-stuck%E2%80%99%3A-disney-ceo.html"
                },
                {
                    "title": "Disney debates future of Hulu and ESPN",
                    "source": "https://finance.yahoo.com/m/e7c03adb-c2e9-3e74-9fbc-01f5b96e2e91/disney-debates-future-of-hulu.html"
                },
                {
                    "title": "NBCUniversal Partners with The Alliance For Media Arts + Culture to Advance Access and Equity in Creative Careers",
                    "source": "https://finance.yahoo.com/news/nbcuniversal-partners-alliance-media-arts-132500851.html"
                },
                {
                    "title": "Comcast Corporation's (NASDAQ:CMCSA) Intrinsic Value Is Potentially 74% Above Its Share Price",
                    "source": "https://finance.yahoo.com/news/comcast-corporations-nasdaq-cmcsa-intrinsic-110015588.html"
                },
                {
                    "title": "Disney World Is Going to Have Its Hands Full in 2025",
                    "source": "https://finance.yahoo.com/m/f8d822b6-807b-33de-b4a9-68aa505a292c/disney-world-is-going-to-have.html"
                },
                {
                    "title": "Comcast Business Named Proud Partner of THE PLAYERS Championship",
                    "source": "https://finance.yahoo.com/news/comcast-business-named-proud-partner-130000601.html"
                }
            ]
        },
        {
            "ticker": "COST",
            "news_items": [
                {
                    "title": "This New Costco Dessert Has Consumers Scrambling to Find It",
                    "source": "https://finance.yahoo.com/m/472b3652-ae68-3857-8957-e82cb33cca18/this-new-costco-dessert-has.html"
                },
                {
                    "title": "6 Incredible Perks of Being a Costco Employee",
                    "source": "https://finance.yahoo.com/news/6-incredible-perks-being-costco-130015713.html"
                },
                {
                    "title": "26 Companies that Donate to Nonprofits",
                    "source": "https://finance.yahoo.com/news/26-companies-donate-nonprofits-170818162.html"
                },
                {
                    "title": "8 Costco Items That Have the Most Customer Complaints",
                    "source": "https://finance.yahoo.com/news/8-costco-items-most-customer-161010854.html"
                },
                {
                    "title": "The Threat of E-Commerce Doesn't Scare This Unstoppable Business",
                    "source": "https://finance.yahoo.com/m/1ef101fd-dcec-3e59-afc9-a41152eb7c07/the-threat-of-e-commerce.html"
                },
                {
                    "title": "3 Stocks You Can Confidently Buy After a Market Downturn",
                    "source": "https://finance.yahoo.com/m/b50ac770-a59a-379b-b0bf-49d62bf009a1/3-stocks-you-can-confidently.html"
                },
                {
                    "title": "How Much Do Memberships Cost at Costco, Sams Club and Other Warehouse Stores?",
                    "source": "https://finance.yahoo.com/news/much-memberships-cost-costco-sam-192943613.html"
                },
                {
                    "title": "9 Best New Items Available at Costco in March",
                    "source": "https://finance.yahoo.com/news/9-best-items-available-costco-160022401.html"
                },
                {
                    "title": "A Bull Market Is Coming: 2 Top Growth Stocks to Buy Now and Hold Forever",
                    "source": "https://finance.yahoo.com/m/8ec55bf9-3630-317c-b6bb-0b64eb660cc4/a-bull-market-is-coming%3A-2.html"
                },
                {
                    "title": "Costco Gets a Boost as Impact of Last-In, First-Out Accounting Fades",
                    "source": "https://finance.yahoo.com/m/fad22acd-15d7-3790-afbd-06716c0aaa56/costco-gets-a-boost-as-impact.html"
                }
            ]
        },
        {
            "ticker": "CPRT",
            "news_items": [
                {
                    "title": "Top Analyst Reports for Union Pacific, Starbucks & Duke Energy",
                    "source": "https://finance.yahoo.com/news/top-analyst-reports-union-pacific-195107820.html"
                },
                {
                    "title": "Ritchie Bros shareholder Vontobel reverses view, now favors IAA deal",
                    "source": "https://finance.yahoo.com/news/ritchie-bros-shareholder-vontobel-reverses-222813376.html"
                },
                {
                    "title": "Copart, Inc. (NASDAQ:CPRT) Q2 2023 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/copart-inc-nasdaq-cprt-q2-000602736.html"
                },
                {
                    "title": "2 Recession-Proof Growth Stocks I'm Loving Now",
                    "source": "https://finance.yahoo.com/m/ec1c21cf-e63a-3226-b396-828b99996a67/2-recession-proof-growth.html"
                },
                {
                    "title": "Q2 2023 Copart Inc Earnings Call",
                    "source": "https://finance.yahoo.com/news/q2-2023-copart-inc-earnings-072024999.html"
                },
                {
                    "title": "Copart (CPRT) Q2 Earnings Beat Estimates, Increase 11% Y/Y",
                    "source": "https://finance.yahoo.com/news/copart-cprt-q2-earnings-beat-155603137.html"
                },
                {
                    "title": "Copart Reports Second Quarter Fiscal 2023 Financial Results",
                    "source": "https://finance.yahoo.com/news/copart-reports-second-quarter-fiscal-223000576.html"
                },
                {
                    "title": "Will Copart's (CPRT) Q2 Earnings Suffer From Cost Pressure?",
                    "source": "https://finance.yahoo.com/news/coparts-cprt-q2-earnings-suffer-103210275.html"
                },
                {
                    "title": "Copart, Inc. to Release Second Quarter Fiscal 2023 Results",
                    "source": "https://finance.yahoo.com/news/copart-inc-release-second-quarter-233600051.html"
                },
                {
                    "title": "Estimating The Intrinsic Value Of Copart, Inc. (NASDAQ:CPRT)",
                    "source": "https://finance.yahoo.com/news/estimating-intrinsic-value-copart-inc-113754029.html"
                }
            ]
        },
        {
            "ticker": "CRWD",
            "news_items": [
                {
                    "title": "Here's Why CrowdStrike Is the Best Cybersecurity Stock on the Market",
                    "source": "https://finance.yahoo.com/m/f7a070b0-f7f1-3799-9922-37af312a354d/here%27s-why-crowdstrike-is-the.html"
                },
                {
                    "title": "2 Reasons to Buy This Supercharged Nasdaq Stock Before it Jumps Higher",
                    "source": "https://finance.yahoo.com/m/33c95204-e554-3e5a-8bf4-3fb73a01ada3/2-reasons-to-buy-this.html"
                },
                {
                    "title": "Nasdaq Bear Market: 1 Growth Stock Down 59% to Buy and Hold Forever",
                    "source": "https://finance.yahoo.com/m/dbc6038c-da38-3c15-a2c8-194ccf05f2f7/nasdaq-bear-market%3A-1-growth.html"
                },
                {
                    "title": "Why CrowdStrike Stock Rallied on Tuesday",
                    "source": "https://finance.yahoo.com/m/686fa0f5-9e38-30a0-b813-1c8bc7769840/why-crowdstrike-stock-rallied.html"
                },
                {
                    "title": "CrowdStrike Holdings (CRWD) Recently Broke Out Above the 20-Day Moving Average",
                    "source": "https://finance.yahoo.com/news/crowdstrike-holdings-crwd-recently-broke-133501436.html"
                },
                {
                    "title": "CrowdStrike May Be a Once-in-a-Decade Opportunity to Supercharge Your Portfolio",
                    "source": "https://finance.yahoo.com/m/c48a6ebd-c49f-302e-841d-e5d0a671d9ed/crowdstrike-may-be-a.html"
                },
                {
                    "title": "CrowdStrike (CRWD) Is a Trending Stock: Facts to Know Before Betting on It",
                    "source": "https://finance.yahoo.com/news/crowdstrike-crwd-trending-stock-facts-130001687.html"
                },
                {
                    "title": "Why Is Everyone Talking About CrowdStrike Stock?",
                    "source": "https://finance.yahoo.com/m/08783eff-67b3-32c8-8458-73f8f27a2191/why-is-everyone-talking-about.html"
                },
                {
                    "title": "Why Is Everyone Talking About Artificial Intelligence?",
                    "source": "https://finance.yahoo.com/m/c8ca786c-a180-398a-8364-f050be4229eb/why-is-everyone-talking-about.html"
                },
                {
                    "title": "3 Artificial Intelligence Stocks You Can Buy and Hold for the Next Decade",
                    "source": "https://finance.yahoo.com/m/0c8a05c3-2ad4-323a-959a-e3317aac15ea/3-artificial-intelligence.html"
                }
            ]
        },
        {
            "ticker": "CSCO",
            "news_items": [
                {
                    "title": "26 Companies that Donate to Nonprofits",
                    "source": "https://finance.yahoo.com/news/26-companies-donate-nonprofits-170818162.html"
                },
                {
                    "title": "Building More Sustainable and Resilient Communities: An Interview With Ciscos Chief Sustainability Officer",
                    "source": "https://finance.yahoo.com/news/building-more-sustainable-resilient-communities-153000144.html"
                },
                {
                    "title": "Companies say they want diversity. So why are Latinos left off corporate boards?",
                    "source": "https://finance.yahoo.com/news/companies-diversifying-corporate-boards-latinos-120047085.html"
                },
                {
                    "title": "Companies say they value diversity. So why are Latinos left off corporate boards?",
                    "source": "https://finance.yahoo.com/m/074670e7-8dcd-3f5f-8566-a9a044edf607/companies-say-they-value.html"
                },
                {
                    "title": "3 Highly Ranked Large-Cap Stocks for Investors to Buy",
                    "source": "https://finance.yahoo.com/news/3-highly-ranked-large-cap-215509008.html"
                },
                {
                    "title": "The Journey and Impact of Getting Proximate",
                    "source": "https://finance.yahoo.com/news/journey-impact-getting-proximate-134500421.html"
                },
                {
                    "title": "Court revives Apple, Google challenge to U.S. patent-review policy",
                    "source": "https://finance.yahoo.com/news/court-revives-apple-google-challenge-193614428.html"
                },
                {
                    "title": "Cisco Systems, Inc.'s (NASDAQ:CSCO) Stock Has Fared Decently: Is the Market Following Strong Financials?",
                    "source": "https://finance.yahoo.com/news/cisco-systems-inc-nasdaq-csco-140025155.html"
                },
                {
                    "title": "What every Zscaler investor needs to know about the stock",
                    "source": "https://finance.yahoo.com/video/every-zscaler-investor-needs-know-102700522.html"
                },
                {
                    "title": "Next Generation Leadership: How Sponsorship Can Help Power an Inclusive Future for Black Cisconians",
                    "source": "https://finance.yahoo.com/news/next-generation-leadership-sponsorship-help-144500905.html"
                }
            ]
        },
        {
            "ticker": "CSGP",
            "news_items": [
                {
                    "title": "Analyst Report: CoStar Group, Inc.",
                    "source": "https://finance.yahoo.com/m/3330655a-e7c4-3e27-992c-e024f897dd4b/analyst-report%3A-costar-group%2C.html"
                },
                {
                    "title": "Is Now The Time To Put CoStar Group (NASDAQ:CSGP) On Your Watchlist?",
                    "source": "https://finance.yahoo.com/news/now-time-put-costar-group-112939449.html"
                },
                {
                    "title": "Apartments.com Publishes February 2023 Rent Growth Report",
                    "source": "https://finance.yahoo.com/news/apartments-com-publishes-february-2023-180000945.html"
                },
                {
                    "title": "CoStar Group, Inc. (NASDAQ:CSGP) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/costar-group-inc-nasdaq-csgp-222125350.html"
                },
                {
                    "title": "CoStar Group Full Year 2022 Earnings: EPS Beats Expectations",
                    "source": "https://finance.yahoo.com/news/costar-group-full-2022-earnings-103321257.html"
                },
                {
                    "title": "Keysight and Charles River shares plunge, Palo Alto Networks stock rallies, and more big movers",
                    "source": "https://finance.yahoo.com/m/885b9c3a-c419-3dad-bf01-3dca6e3e0bf5/keysight-and-charles-river.html"
                },
                {
                    "title": "US STOCKS-Wall St slightly higher as investors focus on Fed minutes",
                    "source": "https://finance.yahoo.com/news/us-stocks-wall-st-slightly-181358245.html"
                },
                {
                    "title": "Analyst Report: CoStar Group, Inc.",
                    "source": "https://finance.yahoo.com/m/68db9cc3-6b34-39ef-a3b4-d6e5f058eee4/analyst-report%3A-costar-group%2C.html"
                },
                {
                    "title": "Why CoStar Group Stock Dropped 5.2% This Morning",
                    "source": "https://finance.yahoo.com/m/7266f5f3-faa7-3d06-b74c-bbe3a275d989/why-costar-group-stock.html"
                },
                {
                    "title": "Why CoStar Group Stock Is Plunging Today",
                    "source": "https://finance.yahoo.com/news/why-costar-group-stock-plunging-160947967.html"
                }
            ]
        },
        {
            "ticker": "CSX",
            "news_items": [
                {
                    "title": "Analyst Report: CSX Corporation",
                    "source": "https://finance.yahoo.com/m/2c6d2c27-57ca-3b9b-8148-1132ecafeda9/analyst-report%3A-csx.html"
                },
                {
                    "title": "Groundbreaking CSX Select Site Program Adds New Tools, Capabilities to Assist Growing Companies",
                    "source": "https://finance.yahoo.com/news/groundbreaking-csx-select-program-adds-170000372.html"
                },
                {
                    "title": "People should know whats moving through their backyards amid train derailments: Fmr. EPA official",
                    "source": "https://finance.yahoo.com/video/people-know-moving-backyards-amid-202525014.html"
                },
                {
                    "title": "Freight Train Derails in West Virginia After Hitting Rockslide",
                    "source": "https://finance.yahoo.com/video/freight-train-derails-west-virginia-102500178.html"
                },
                {
                    "title": "Freight train derails in West Virginia, spills diesel fuel into nearby river",
                    "source": "https://finance.yahoo.com/news/freight-train-derails-west-virginia-201928221.html"
                },
                {
                    "title": "CSX train derails in West Virginia",
                    "source": "https://finance.yahoo.com/m/11207a68-cba9-3eed-b0c8-7915c52b5847/csx-train-derails-in-west.html"
                },
                {
                    "title": "CSX Chief Financial Officer to Address JP Morgan Industrials Conference",
                    "source": "https://finance.yahoo.com/news/csx-chief-financial-officer-address-150000123.html"
                },
                {
                    "title": "CSX Investments and Policy Enhancementsu00a0Drive Multi-year Safety Improvement Trend",
                    "source": "https://finance.yahoo.com/news/csx-investments-policy-enhancements-drive-174900362.html"
                },
                {
                    "title": "CSX Joins FRA Close Call Reporting System",
                    "source": "https://finance.yahoo.com/news/csx-joins-fra-close-call-023900483.html"
                },
                {
                    "title": "Norfolk Southern and Other Freight Railroads Agree to Join Federal Close-Call Reporting System",
                    "source": "https://finance.yahoo.com/m/1cd57745-d46a-3b87-9424-b62aafc248a0/norfolk-southern-and-other.html"
                }
            ]
        },
        {
            "ticker": "CTAS",
            "news_items": [
                {
                    "title": "Cintas Corporation Announces Webcast for Third Quarter Fiscal Year 2023 Results",
                    "source": "https://finance.yahoo.com/news/cintas-corporation-announces-webcast-third-144600742.html"
                },
                {
                    "title": "The Polls are Open! Cintas Announces Top 10 Finalists in Nationwide 2023 Cintas Custodian of the Year Contest",
                    "source": "https://finance.yahoo.com/news/polls-open-cintas-announces-top-143000764.html"
                },
                {
                    "title": "Cintas Canada Calls for Nominations for the 2023 Canadas Best Restroom Contest",
                    "source": "https://finance.yahoo.com/news/cintas-canada-calls-nominations-2023-133000112.html"
                },
                {
                    "title": "Cintas Recognized as an LGBTQ+ Corporate Change Champion",
                    "source": "https://finance.yahoo.com/news/cintas-recognized-lgbtq-corporate-change-182500304.html"
                },
                {
                    "title": "Cintas' LED Lighting Transition Nears Completion",
                    "source": "https://finance.yahoo.com/news/cintas-led-lighting-transition-nears-194500406.html"
                },
                {
                    "title": "Cintas LED Lighting Transition Nears Completion",
                    "source": "https://finance.yahoo.com/news/cintas-led-lighting-transition-nears-190000571.html"
                },
                {
                    "title": "Cintas Honored with Multiple Workplace and Employment Practices Awards",
                    "source": "https://finance.yahoo.com/news/cintas-honored-multiple-workplace-employment-210000763.html"
                },
                {
                    "title": "Cintas Honored With Multiple Workplace and Employment Practices Awards",
                    "source": "https://finance.yahoo.com/news/cintas-honored-multiple-workplace-employment-190000435.html"
                },
                {
                    "title": "Cintas Partner Business Resource Groups: Supporting Employee-Partner Development",
                    "source": "https://finance.yahoo.com/news/cintas-partner-business-groups-supporting-211500801.html"
                },
                {
                    "title": "Cintas (NASDAQ:CTAS) Ticks All The Boxes When It Comes To Earnings Growth",
                    "source": "https://finance.yahoo.com/news/cintas-nasdaq-ctas-ticks-boxes-180109530.html"
                }
            ]
        },
        {
            "ticker": "CTSH",
            "news_items": [
                {
                    "title": "Cognizant Engaged by Volkswagen Group Ireland to Transform its Digital Customer Experience",
                    "source": "https://finance.yahoo.com/news/cognizant-engaged-volkswagen-group-ireland-100100627.html"
                },
                {
                    "title": "Cognizant Engaged by Volkswagen Group Ireland to Transform its Digital Customer Experience",
                    "source": "https://finance.yahoo.com/news/cognizant-engaged-volkswagen-group-ireland-090000599.html"
                },
                {
                    "title": "The 7 Most Undervalued Stocks to Buy in March 2023",
                    "source": "https://finance.yahoo.com/news/7-most-undervalued-stocks-buy-191101090.html"
                },
                {
                    "title": "Analyst Report: Cognizant Technology Solutions Corporation",
                    "source": "https://finance.yahoo.com/m/24a381a9-c780-30b6-a100-45d6b6187f7c/analyst-report%3A-cognizant.html"
                },
                {
                    "title": "At US$62.61, Is It Time To Put Cognizant Technology Solutions Corporation (NASDAQ:CTSH) On Your Watch List?",
                    "source": "https://finance.yahoo.com/news/us-62-61-time-put-112522425.html"
                },
                {
                    "title": "DSB selects Cognizant as Sole Offshore Supplier of IT Consulting Services",
                    "source": "https://finance.yahoo.com/news/dsb-selects-cognizant-sole-offshore-201000680.html"
                },
                {
                    "title": "DSB selects Cognizant as Sole Offshore Supplier of IT Consulting Services",
                    "source": "https://finance.yahoo.com/news/dsb-selects-cognizant-sole-offshore-080000722.html"
                },
                {
                    "title": "Cognizant to Present at the Morgan Stanley Technology, Media & Telecom Conference",
                    "source": "https://finance.yahoo.com/news/cognizant-present-morgan-stanley-technology-140000577.html"
                },
                {
                    "title": "Google Subcontractors Face Low Pay, Inadequateu00a0Benefits, Union Survey Finds",
                    "source": "https://finance.yahoo.com/news/google-subcontractors-face-low-pay-170028950.html"
                },
                {
                    "title": "Cognizant Technology Solutions (NASDAQ:CTSH) investors are sitting on a loss of 22% if they invested a year ago",
                    "source": "https://finance.yahoo.com/news/cognizant-technology-solutions-nasdaq-ctsh-101510917.html"
                }
            ]
        },
        {
            "ticker": "DDOG",
            "news_items": [
                {
                    "title": "Why Is Everyone Talking About DataDog Stock?",
                    "source": "https://finance.yahoo.com/m/0270d51e-2f47-3f6e-8169-e84806ed78e7/why-is-everyone-talking-about.html"
                },
                {
                    "title": "What's Going On With DataDog Stock?",
                    "source": "https://finance.yahoo.com/m/2e9f410c-943e-3722-bda3-0a2cb2c10029/what%27s-going-on-with-datadog.html"
                },
                {
                    "title": "Falling Inflation Is Lifting the Nasdaq: 2 Stocks to Buy Hand Over Fist",
                    "source": "https://finance.yahoo.com/m/e5dc10fa-5f64-30da-b47a-c2d84c2b559f/falling-inflation-is-lifting.html"
                },
                {
                    "title": "Is It Finally Time to Buy Datadog Stock?",
                    "source": "https://finance.yahoo.com/m/c70e0f7c-69d4-32f7-8929-3742aaddf5ce/is-it-finally-time-to-buy.html"
                },
                {
                    "title": "Datadog (DDOG) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/datadog-ddog-gains-market-dips-215009842.html"
                },
                {
                    "title": "3 Top Growth Stocks to Supercharge Your Portfolio",
                    "source": "https://finance.yahoo.com/m/92d23530-8959-3a5e-bd0c-c6ad46228b8d/3-top-growth-stocks-to.html"
                },
                {
                    "title": "Best Growth Stock to Buy: The Trade Desk vs. DraftKings vs. DataDog",
                    "source": "https://finance.yahoo.com/m/2e4a16ec-858f-381e-a1ce-eeafda584171/best-growth-stock-to-buy%3A-the.html"
                },
                {
                    "title": "Datadogs software goes down  and so does its stock",
                    "source": "https://finance.yahoo.com/m/51a624c7-dc84-33a3-bdea-54a1215e6875/datadog%E2%80%99s-software-goes-down.html"
                },
                {
                    "title": "Datadogs software is down  and so is its stock",
                    "source": "https://finance.yahoo.com/m/51a624c7-dc84-33a3-bdea-54a1215e6875/datadog%E2%80%99s-software-is-down-%E2%80%94.html"
                },
                {
                    "title": "30 Biggest SaaS Companies in the World in 2023",
                    "source": "https://finance.yahoo.com/news/30-biggest-saas-companies-world-164842565.html"
                }
            ]
        },
        {
            "ticker": "DLTR",
            "news_items": [
                {
                    "title": "Dollar General is gaining customers from higher income brackets amid inflation",
                    "source": "https://finance.yahoo.com/news/dollar-general-is-gaining-customers-from-higher-income-brackets-amid-inflation-204343857.html"
                },
                {
                    "title": "Is This Stock a No-Brainer Buy for Growth Investors?",
                    "source": "https://finance.yahoo.com/m/1aef6bf6-73c3-3c7f-ba01-3e2ab1cee1dd/is-this-stock-a-no-brainer.html"
                },
                {
                    "title": "10 Dollar Tree Grocery Items That Can Save You Hundreds of Dollars Annually",
                    "source": "https://finance.yahoo.com/news/10-dollar-tree-grocery-items-141000263.html"
                },
                {
                    "title": "Dollar Tree: 5 High-Quality Items To Buy Now",
                    "source": "https://finance.yahoo.com/news/dollar-tree-5-high-quality-150025070.html"
                },
                {
                    "title": "11 Grocery Items To Buy at Dollar Tree",
                    "source": "https://finance.yahoo.com/news/11-grocery-items-buy-dollar-200122241.html"
                },
                {
                    "title": "With prices soaring, Dollar Tree ditches eggs until later this year",
                    "source": "https://finance.yahoo.com/news/prices-soaring-dollar-tree-ditches-212319421.html"
                },
                {
                    "title": "With prices soaring, Dollar Tree ditches eggs until later this year",
                    "source": "https://finance.yahoo.com/news/prices-soaring-dollar-tree-ditches-211857968.html"
                },
                {
                    "title": "Dollar Tree Offers These Must-Have Tech Gadgets for Under $5",
                    "source": "https://finance.yahoo.com/news/dollar-tree-offers-must-tech-232402388.html"
                },
                {
                    "title": "7 Stocks to Buy on the Latest Jobs Report",
                    "source": "https://finance.yahoo.com/news/7-stocks-buy-latest-jobs-211844090.html"
                },
                {
                    "title": "34 Dollar Store Secrets You Need To Know Before You Shop",
                    "source": "https://finance.yahoo.com/news/34-dollar-store-secrets-know-133031396.html"
                }
            ]
        },
        {
            "ticker": "DXCM",
            "news_items": [
                {
                    "title": "DexCom Stock Gets A Composite Rating Upgrade After 4 Up Days",
                    "source": "https://finance.yahoo.com/m/473d03e1-b5fe-36d4-881e-60bc8b158590/dexcom-stock-gets-a-composite.html"
                },
                {
                    "title": "DexCom (DXCM) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/dexcom-dxcm-gains-market-dips-221510146.html"
                },
                {
                    "title": "DexCom Comments on SVB Relationship",
                    "source": "https://finance.yahoo.com/news/dexcom-comments-svb-relationship-113000583.html"
                },
                {
                    "title": "DexCom (DXCM) Stock Moves -0.59%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/dexcom-dxcm-stock-moves-0-231511579.html"
                },
                {
                    "title": "2 Top Stocks to Buy in March and Hold Forever",
                    "source": "https://finance.yahoo.com/m/364f0050-7bd5-321e-b902-53dea2364b33/2-top-stocks-to-buy-in-march.html"
                },
                {
                    "title": "Want to Get Richer? 2 Top Stocks to Buy Now and Hold Forever",
                    "source": "https://finance.yahoo.com/m/83b74865-16ce-3fae-86b9-c58235391eb9/want-to-get-richer%3F-2-top.html"
                },
                {
                    "title": "Analyst Report: DexCom, Inc.",
                    "source": "https://finance.yahoo.com/m/a18fe7c2-b476-3be6-a17c-b5f3fc76575f/analyst-report%3A-dexcom%2C-inc..html"
                },
                {
                    "title": "What Makes DexCom (DXCM) an Attractive Investment Bet?",
                    "source": "https://finance.yahoo.com/news/makes-dexcom-dxcm-attractive-investment-095958034.html"
                },
                {
                    "title": "Dexcom Pummeled On A New FDA Clearance For Key Rival Abbott Laboratories",
                    "source": "https://finance.yahoo.com/m/a82bea3d-1114-3a1a-8a4b-e3d3af9ab516/dexcom-pummeled-on-a-new-fda.html"
                },
                {
                    "title": "5 Stocks That Powered Nasdaq ETF Last Week",
                    "source": "https://finance.yahoo.com/news/5-stocks-powered-nasdaq-etf-150503505.html"
                }
            ]
        },
        {
            "ticker": "EA",
            "news_items": [
                {
                    "title": "11 Best Debt Free Stocks to Buy",
                    "source": "https://finance.yahoo.com/news/11-best-debt-free-stocks-131550252.html"
                },
                {
                    "title": "10 Most Promising Metaverse Stocks to Buy",
                    "source": "https://finance.yahoo.com/news/10-most-promising-metaverse-stocks-174246297.html"
                },
                {
                    "title": "EA SPORTS Furthers Commitment to Womens Football With National Womens Soccer League and National Womens Soccer League Players Association Partnerships",
                    "source": "https://finance.yahoo.com/news/ea-sports-furthers-commitment-women-170000381.html"
                },
                {
                    "title": "11 Most Profitable Gaming Stocks Now",
                    "source": "https://finance.yahoo.com/news/11-most-profitable-gaming-stocks-150537105.html"
                },
                {
                    "title": "3 Top Gaming Stocks to Buy in March",
                    "source": "https://finance.yahoo.com/m/f1eb5301-bb73-379f-9d26-3335f9abea2d/3-top-gaming-stocks-to-buy-in.html"
                },
                {
                    "title": "7 Growth Stocks in the Gaming Industry With High Potential for Gains",
                    "source": "https://finance.yahoo.com/news/7-growth-stocks-gaming-industry-183203914.html"
                },
                {
                    "title": "Electronic Arts (EA) Down 5.4% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/electronic-arts-ea-down-5-163004577.html"
                },
                {
                    "title": "3 Top Growth Stocks to Buy Right Now",
                    "source": "https://finance.yahoo.com/m/d5a8ffaa-fb23-30b7-b6a0-7f663d91f9f4/3-top-growth-stocks-to-buy.html"
                },
                {
                    "title": "Electronic Arts Founder Trip Hawkins Joins Web3 Gaming Startup",
                    "source": "https://finance.yahoo.com/news/electronic-arts-founder-trip-hawkins-143937330.html"
                },
                {
                    "title": "Azra Games, founded by veteran EA game developer, raises $10M for NFT-themed Legions & Legends",
                    "source": "https://finance.yahoo.com/news/azra-games-founded-veteran-ea-140000845.html"
                }
            ]
        },
        {
            "ticker": "EBAY",
            "news_items": [
                {
                    "title": "eBay Inc. Announces the Addition of a New Director to its Board of Directors",
                    "source": "https://finance.yahoo.com/news/ebay-inc-announces-addition-director-200500365.html"
                },
                {
                    "title": "81% of Carl Icahn's Portfolio Is Invested in These 2 Stocks",
                    "source": "https://finance.yahoo.com/m/e63bf7c8-3939-3fe6-ae7c-b993eb4af864/81%25-of-carl-icahn%27s-portfolio.html"
                },
                {
                    "title": "20 Things To Sell for Extra Money During Inflation",
                    "source": "https://finance.yahoo.com/news/20-things-sell-extra-money-161012558.html"
                },
                {
                    "title": "Theres a Run on Silicon Valley Bank Swag",
                    "source": "https://finance.yahoo.com/m/b84a80b2-07dd-3a3f-ae0c-747f05f88e05/there%E2%80%99s-a-run-on-silicon.html"
                },
                {
                    "title": "SVB swag is a hot seller on eBay",
                    "source": "https://finance.yahoo.com/news/svb-swag-hot-seller-ebay-154134302.html"
                },
                {
                    "title": "Meta cuts more jobs in latest tech layoffs",
                    "source": "https://finance.yahoo.com/m/0fba6cc2-3d87-3037-b547-f2d80a477d38/meta-cuts-more-jobs-in-latest.html"
                },
                {
                    "title": "EBay slams 'alarming' Meta subpoena in FTC monopoly case",
                    "source": "https://finance.yahoo.com/news/ebay-slams-alarming-meta-subpoena-184015813.html"
                },
                {
                    "title": "20 Biggest Publishing Companies in the World (Updated)",
                    "source": "https://finance.yahoo.com/news/20-biggest-publishing-companies-world-133603045.html"
                },
                {
                    "title": "Shopify Stock: Bull vs. Bear",
                    "source": "https://finance.yahoo.com/m/02c416b1-510f-3f32-9db0-8b557a410987/shopify-stock%3A-bull-vs.-bear.html"
                },
                {
                    "title": "These 2 Retail-Wholesale Stocks Could Beat Earnings: Why They Should Be on Your Radar",
                    "source": "https://finance.yahoo.com/news/2-retail-wholesale-stocks-could-130001188.html"
                }
            ]
        },
        {
            "ticker": "ENPH",
            "news_items": [
                {
                    "title": "The UN wants to reflect sunlight back into space in order to cool the earth  but some companies are harnessing it instead. Here are 3 high-flying solar stocks that Wall Street likes",
                    "source": "https://finance.yahoo.com/news/un-wants-reflect-sunlight-back-110000332.html"
                },
                {
                    "title": "Analyst Report: Enphase Energy, Inc.",
                    "source": "https://finance.yahoo.com/m/55a3bc26-5c3c-3c44-81a1-5f3d6be9606b/analyst-report%3A-enphase.html"
                },
                {
                    "title": "SolarEdge (SEDG) Down 0.4% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/solaredge-sedg-down-0-4-153003300.html"
                },
                {
                    "title": "Why Energy Stocks Jumped on Tuesday",
                    "source": "https://finance.yahoo.com/m/bab3bdee-beb5-3c9c-a701-c65490d907af/why-energy-stocks-jumped-on.html"
                },
                {
                    "title": "Enphase (ENPH) Witnesses Increased Product Deployment in Utah",
                    "source": "https://finance.yahoo.com/news/enphase-enph-witnesses-increased-product-161804420.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights Enphase Energy, First Solar and Canadian Solar",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-enphase-123112348.html"
                },
                {
                    "title": "Enphase Energy (ENPH) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/enphase-energy-enph-gains-market-214509402.html"
                },
                {
                    "title": "3 Solar Stocks to Watch Amid Growing Residential Installations",
                    "source": "https://finance.yahoo.com/news/3-solar-stocks-watch-amid-152503898.html"
                },
                {
                    "title": "12 Thrilling Stocks to Buy According to Louis Navellier",
                    "source": "https://finance.yahoo.com/news/12-thrilling-stocks-buy-according-125618782.html"
                },
                {
                    "title": "Enphase Energy Expands IQ8 Microinverter Deployments in Utah",
                    "source": "https://finance.yahoo.com/news/enphase-energy-expands-iq8-microinverter-120000844.html"
                }
            ]
        },
        {
            "ticker": "EXC",
            "news_items": [
                {
                    "title": "Exelon Energy Transformation Centered on Diversity, Equity and Inclusion",
                    "source": "https://finance.yahoo.com/news/exelon-energy-transformation-centered-diversity-130000536.html"
                },
                {
                    "title": "ComEd Coolers Went Back to the Beach for Special Olympics Chicago/Special Children's Charities Polar Plunge",
                    "source": "https://finance.yahoo.com/news/comed-coolers-went-back-beach-182500817.html"
                },
                {
                    "title": "ComEd To Hire Another 30 Entry-Level Trade Workers to Support Clean Energy Transition",
                    "source": "https://finance.yahoo.com/news/comed-hire-another-30-entry-160000757.html"
                },
                {
                    "title": "Analyst Report: Exelon Corporation",
                    "source": "https://finance.yahoo.com/m/d69cbbe0-c9fe-3269-ba98-db12382c093d/analyst-report%3A-exelon.html"
                },
                {
                    "title": "ComEd Expands Drone Program With Remotely Piloted Drones to Enhance Operations",
                    "source": "https://finance.yahoo.com/news/comed-expands-drone-program-remotely-143200598.html"
                },
                {
                    "title": "Exelon Teams Win EPRI 2022 Technology Transfer Awards for Innovation",
                    "source": "https://finance.yahoo.com/news/exelon-teams-win-epri-2022-153800343.html"
                },
                {
                    "title": "ComEd Restores Power to 88 Percent of Customers Following Damaging Ice Storms and High Winds",
                    "source": "https://finance.yahoo.com/news/comed-restores-power-88-percent-034900795.html"
                },
                {
                    "title": "ComEd Restores Power to Nearly 134,000 Customers Following Damaging Ice Storms",
                    "source": "https://finance.yahoo.com/news/comed-restores-power-nearly-134-182100718.html"
                },
                {
                    "title": "ComEd Restores Power to 55,000 Customers Following Damaging Ice Storms",
                    "source": "https://finance.yahoo.com/news/comed-restores-power-55-000-030100384.html"
                },
                {
                    "title": "Exelon Named to Fortunes Most Admired Companies List",
                    "source": "https://finance.yahoo.com/news/exelon-named-fortune-most-admired-140000637.html"
                }
            ]
        },
        {
            "ticker": "FANG",
            "news_items": [
                {
                    "title": "11 Best Crude Oil Stocks To Buy As Tensions Rise",
                    "source": "https://finance.yahoo.com/news/11-best-crude-oil-stocks-022751975.html"
                },
                {
                    "title": "Diamondback Energy (FANG) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/diamondback-energy-fang-gains-lags-220010633.html"
                },
                {
                    "title": "With Diamondback Energy, Inc.'s (NASDAQ:FANG)) price down 5.3% this week, insiders might find some solace having sold US$1.0m worth of shares earlier this year.",
                    "source": "https://finance.yahoo.com/news/diamondback-energy-inc-nasdaq-fang-140012586.html"
                },
                {
                    "title": "Diamondback Energy, Inc. (FANG) is Attracting Investor Attention: Here is What You Should Know",
                    "source": "https://finance.yahoo.com/news/diamondback-energy-inc-fang-attracting-130001260.html"
                },
                {
                    "title": "Permian Oil Rig Count Falls for 4 Straight Weeks",
                    "source": "https://finance.yahoo.com/news/permian-oil-rig-count-falls-114911798.html"
                },
                {
                    "title": "Should You Be Adding Diamondback Energy (NASDAQ:FANG) To Your Watchlist Today?",
                    "source": "https://finance.yahoo.com/news/adding-diamondback-energy-nasdaq-fang-110023049.html"
                },
                {
                    "title": "Diamondback Energy (FANG) Stock Moves -0.56%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/diamondback-energy-fang-stock-moves-225010286.html"
                },
                {
                    "title": "3 High-Yield Dividend Stocks to Scoop Up Before the Next Bull Market",
                    "source": "https://finance.yahoo.com/m/022e9d96-8c3c-32df-ae2a-2f192087a78a/3-high-yield-dividend-stocks.html"
                },
                {
                    "title": "Estimating The Fair Value Of Diamondback Energy, Inc. (NASDAQ:FANG)",
                    "source": "https://finance.yahoo.com/news/estimating-fair-value-diamondback-energy-110035338.html"
                },
                {
                    "title": "17 High Growth Low PE Stocks",
                    "source": "https://finance.yahoo.com/news/17-high-growth-low-pe-140804874.html"
                }
            ]
        },
        {
            "ticker": "FAST",
            "news_items": [
                {
                    "title": "Capital Investments At Fastenal (NASDAQ:FAST) Point To A Promising Future",
                    "source": "https://finance.yahoo.com/news/capital-investments-fastenal-nasdaq-fast-144200061.html"
                },
                {
                    "title": "20 Biggest Plumbing Supply Companies in the World",
                    "source": "https://finance.yahoo.com/news/20-biggest-plumbing-supply-companies-130529617.html"
                },
                {
                    "title": "Fastenal Names New Executive VP of Human Resources",
                    "source": "https://finance.yahoo.com/news/fastenal-names-executive-vp-human-220500329.html"
                },
                {
                    "title": "Zacks Investment Ideas feature highlights: Tecnoglass, Fastenal Company and Builders FirstSource",
                    "source": "https://finance.yahoo.com/news/zacks-investment-ideas-feature-highlights-100010820.html"
                },
                {
                    "title": "What Is a CEOs Pay Actually Worth?",
                    "source": "https://finance.yahoo.com/m/bd290d7f-54a1-362a-a6e4-c3934c8c5cfd/what-is-a-ceo%E2%80%99s-pay-actually.html"
                },
                {
                    "title": "At US$53.03, Is Fastenal Company (NASDAQ:FAST) Worth Looking At Closely?",
                    "source": "https://finance.yahoo.com/news/us-53-03-fastenal-company-184050773.html"
                },
                {
                    "title": "25 Biggest Minnesota Companies and Stocks",
                    "source": "https://finance.yahoo.com/news/25-biggest-minnesota-companies-stocks-185030675.html"
                },
                {
                    "title": "Analyst Report: Fastenal Company",
                    "source": "https://finance.yahoo.com/m/b5c6762d-9f7e-33ef-9649-2660f777fd1f/analyst-report%3A-fastenal.html"
                },
                {
                    "title": "Analyst Report: Fastenal Company",
                    "source": "https://finance.yahoo.com/m/115004cc-e5fe-3284-b7b5-fb04aa586b8a/analyst-report%3A-fastenal.html"
                },
                {
                    "title": "Target, 3M are top Minnesota companies on Fortune 'Most Admired' list",
                    "source": "https://finance.yahoo.com/m/ab97855c-25b8-3081-a627-d6372d1821fd/target%2C-3m-are-top-minnesota.html"
                }
            ]
        },
        {
            "ticker": "FISV",
            "news_items": [
                {
                    "title": "Here's Why Investors Should Retain Fiserv (FISV) Stock Now",
                    "source": "https://finance.yahoo.com/news/heres-why-investors-retain-fiserv-190107729.html"
                },
                {
                    "title": "Fiserv (FISV) Soars 6.0%: Is Further Upside Left in the Stock?",
                    "source": "https://finance.yahoo.com/news/fiserv-fisv-soars-6-0-182806302.html"
                },
                {
                    "title": "Fiserv, FIS stocks claw back as SVB, Signature Bank exposure dubbed minimal",
                    "source": "https://finance.yahoo.com/m/86d1ba30-e5bc-3862-a085-8045dfbfb24b/fiserv%2C-fis-stocks-claw-back.html"
                },
                {
                    "title": "Hard Hit By Bank Crisis, These Fintech Stocks Try To Claw Back",
                    "source": "https://finance.yahoo.com/m/821bd475-38ae-3c15-895e-779055b19275/hard-hit-by-bank-crisis%2C.html"
                },
                {
                    "title": "Is The Worst Over For These Fintech Stocks, Hard Hit By Bank Crisis?",
                    "source": "https://finance.yahoo.com/m/821bd475-38ae-3c15-895e-779055b19275/is-the-worst-over-for-these.html"
                },
                {
                    "title": "Why This 1 Growth Stock Could Be a Great Addition to Your Portfolio",
                    "source": "https://finance.yahoo.com/news/why-1-growth-stock-could-134501729.html"
                },
                {
                    "title": "Fiserv Announces Executive Leadership Changes",
                    "source": "https://finance.yahoo.com/news/fiserv-announces-executive-leadership-changes-123200935.html"
                },
                {
                    "title": "Fiserv to Present at Wolfe FinTech Forum 2023",
                    "source": "https://finance.yahoo.com/news/fiserv-present-wolfe-fintech-forum-230600139.html"
                },
                {
                    "title": "Amid SVB Financial's Implosion, These 3 Tech Stocks Fend Off The Bears",
                    "source": "https://finance.yahoo.com/m/3bcad7a8-53ea-3c57-b85f-0b9ebcde44b1/amid-svb-financial%27s.html"
                },
                {
                    "title": "Two Stocks Return To IBD Long-Term Leaders; Monolithic Power Jumps Back Into Watchlist",
                    "source": "https://finance.yahoo.com/m/3bcad7a8-53ea-3c57-b85f-0b9ebcde44b1/two-stocks-return-to-ibd.html"
                }
            ]
        },
        {
            "ticker": "FTNT",
            "news_items": [
                {
                    "title": "Better Cybersecurity Stock: Fortinet vs. Cloudflare",
                    "source": "https://finance.yahoo.com/m/eb2e70ad-cb5b-3dc1-aed5-d6c003777324/better-cybersecurity-stock%3A.html"
                },
                {
                    "title": "Fortinet (FTNT) SD-WAN to Boost ENOC's Operational Efficiency",
                    "source": "https://finance.yahoo.com/news/fortinet-ftnt-sd-wan-boost-113811044.html"
                },
                {
                    "title": "Fortinet, IBD Stock Of The Day, Helps Companies Protect Valuable Data",
                    "source": "https://finance.yahoo.com/m/cee691fa-2fc6-3987-84d8-64d27a0db04d/fortinet%2C-ibd-stock-of-the.html"
                },
                {
                    "title": "Emirates National Oil Company Transforms Customer Experience and Increases Operational Efficiency with Fortinet Secure SD-WAN",
                    "source": "https://finance.yahoo.com/news/emirates-national-oil-company-transforms-130000356.html"
                },
                {
                    "title": "Dow Jones Futures: Nasdaq Rallies Above Key Levels; Meta Stock Flashes Buy Signal",
                    "source": "https://finance.yahoo.com/m/77b08152-2c06-3add-95fb-970667578035/dow-jones-futures%3A-nasdaq.html"
                },
                {
                    "title": "Dow Jones Rallies Over 300 Points: Meta Flashes Buy Signal; Bank Stocks Slash Huge Gains",
                    "source": "https://finance.yahoo.com/m/77b08152-2c06-3add-95fb-970667578035/dow-jones-rallies-over-300.html"
                },
                {
                    "title": "Top 10 Growth Stocks in Cybersecurity",
                    "source": "https://finance.yahoo.com/news/top-10-growth-stocks-cybersecurity-131910546.html"
                },
                {
                    "title": "Fortinet (FTNT) Dips More Than Broader Markets: What You Should Know",
                    "source": "https://finance.yahoo.com/news/fortinet-ftnt-dips-more-broader-224510490.html"
                },
                {
                    "title": "Why Is Fortinet (FTNT) Up 3.6% Since Last Earnings Report?",
                    "source": "https://finance.yahoo.com/news/why-fortinet-ftnt-3-6-163004441.html"
                },
                {
                    "title": "Fortinet (FTNT) Upgrades Single-Vendor FortiSASE Solution",
                    "source": "https://finance.yahoo.com/news/fortinet-ftnt-upgrades-single-vendor-140902239.html"
                }
            ]
        },
        {
            "ticker": "GFS",
            "news_items": [
                {
                    "title": "UMC or GFS: Which Is the Better Value Stock Right Now?",
                    "source": "https://finance.yahoo.com/news/umc-gfs-better-value-stock-154003518.html"
                },
                {
                    "title": "Top Tech Stocks for March 2023",
                    "source": "https://finance.yahoo.com/m/9d135796-51f4-3a67-bcaa-f2d27450ca3d/top-tech-stocks-for-march-2023.html"
                },
                {
                    "title": "15 Most Profitable New Stocks Today",
                    "source": "https://finance.yahoo.com/news/15-most-profitable-stocks-today-112753001.html"
                },
                {
                    "title": "GlobalFoundries and General Motors Team Up -- a Win-Win for Both Companies?",
                    "source": "https://finance.yahoo.com/m/d78570bc-cca7-322b-a04a-0126f508c3c3/globalfoundries-and-general.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights Infineon Technologies, GlobalFoundries and ASE Technology",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-infineon-131201555.html"
                },
                {
                    "title": "GLOBALFOUNDRIES Inc. (NASDAQ:GFS) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/globalfoundries-inc-nasdaq-gfs-q4-213750232.html"
                },
                {
                    "title": "Chipmaker Blasts Into Buy Zone On IoT Expansion, 700% Growth",
                    "source": "https://finance.yahoo.com/m/0abdfe8c-ac76-3a5c-8072-62584ca5e944/chipmaker-blasts-into-buy.html"
                },
                {
                    "title": "3 Electronics Stocks to Escape Pandemic-Led Disruptions",
                    "source": "https://finance.yahoo.com/news/3-electronics-stocks-escape-pandemic-150703239.html"
                },
                {
                    "title": "Analyst Report: GLOBALFOUNDRIES Inc.",
                    "source": "https://finance.yahoo.com/m/0ad45a47-4ac3-3945-b797-473ffaa4f5c1/analyst-report%3A.html"
                },
                {
                    "title": "Analyst Report: GLOBALFOUNDRIES Inc.",
                    "source": "https://finance.yahoo.com/m/a8b1f843-2c36-345e-8484-4e3038a0e26b/analyst-report%3A.html"
                }
            ]
        },
        {
            "ticker": "GILD",
            "news_items": [
                {
                    "title": "Gilead Sciences (GILD) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/gilead-sciences-gild-gains-lags-214509140.html"
                },
                {
                    "title": "Gilead (GILD) Gains 34% in 12 Months: Will the Trend Sustain?",
                    "source": "https://finance.yahoo.com/news/gilead-gild-gains-34-12-161004090.html"
                },
                {
                    "title": "Heres Why Gilead Sciences (GILD) Outperformed in Q4",
                    "source": "https://finance.yahoo.com/news/why-gilead-sciences-gild-outperformed-113050409.html"
                },
                {
                    "title": "Gilead Sciences (NASDAQ:GILD) Seems To Use Debt Quite Sensibly",
                    "source": "https://finance.yahoo.com/news/gilead-sciences-nasdaq-gild-seems-110050898.html"
                },
                {
                    "title": "Gilead Sciences (GILD) Stock Moves -0.15%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/gilead-sciences-gild-stock-moves-215009848.html"
                },
                {
                    "title": "Medicare identifies drug makers that will owe penalties for raising prices on 27 drugs faster than rate of inflation",
                    "source": "https://finance.yahoo.com/news/medicare-identifies-drug-makers-that-will-owe-penalties-for-raising-prices-on-27-drugs-faster-than-rate-of-inflation-193858208.html"
                },
                {
                    "title": "First Drugs Facing Medicare Price Penalty Are Named",
                    "source": "https://finance.yahoo.com/m/20ff052f-4364-32cd-ac2e-c394764df38f/first-drugs-facing-medicare.html"
                },
                {
                    "title": "Stacey Bledsoe's Resolve To Make Clinical Trials Available to Everyone",
                    "source": "https://finance.yahoo.com/news/stacey-bledsoes-resolve-clinical-trials-142500971.html"
                },
                {
                    "title": "Gilead Sciences, Inc. (NASDAQ:GILD) is a favorite amongst institutional investors who own 84%",
                    "source": "https://finance.yahoo.com/news/gilead-sciences-inc-nasdaq-gild-130036182.html"
                },
                {
                    "title": "Gilead Sciences (GILD) Stock Moves -1.55%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/gilead-sciences-gild-stock-moves-224510117.html"
                }
            ]
        },
        {
            "ticker": "GOOG",
            "news_items": [
                {
                    "title": "Heres Whats Buzzing at SXSW 2023",
                    "source": "https://finance.yahoo.com/video/buzzing-sxsw-2023-000003262.html"
                },
                {
                    "title": "YouTube to Raise Prices on TV Offering",
                    "source": "https://finance.yahoo.com/m/bcf845b2-f6b1-366e-a23a-a61214700402/youtube-to-raise-prices-on-tv.html"
                },
                {
                    "title": "YouTube TV raises monthly price to $72.99 citing higher content costs",
                    "source": "https://finance.yahoo.com/news/youtube-tv-raises-monthly-price-to-7299-citing-higher-content-costs-190222879.html"
                },
                {
                    "title": "Google Glass Is Going Away, Again",
                    "source": "https://finance.yahoo.com/m/64a0cf10-50a9-36b6-9b4a-2bd039f274c4/google-glass-is-going-away%2C.html"
                },
                {
                    "title": "Microsoft is bringing AI to its productivity apps, in another strike at Google",
                    "source": "https://finance.yahoo.com/news/microsoft-is-bringing-ai-to-its-productivity-apps-in-another-strike-at-google-150058515.html"
                },
                {
                    "title": "Baidus ChatGPT Rival Ernie Bot Doesnt Go Live at Its Launch Party",
                    "source": "https://finance.yahoo.com/m/e511affc-91a9-37fb-95ed-9d791d15ead9/baidu%E2%80%99s-chatgpt-rival-ernie.html"
                },
                {
                    "title": "Marvel Takes Google and Reddit to Court Over Leaked Ant-Man Script",
                    "source": "https://finance.yahoo.com/m/08afdad2-9d8c-3148-8e95-a9b28bbc4f85/marvel-takes-google-and.html"
                },
                {
                    "title": "Silicon Valleys startup scene is safe. At least for now.",
                    "source": "https://finance.yahoo.com/news/silicon-valleys-startup-scene-is-safe-at-least-for-now-165411281.html"
                },
                {
                    "title": "Google Selects Fastly Oblivious HTTP Relay for Privacy Sandbox Initiative to Enhance Online Privacy for Billions of Chrome Users",
                    "source": "https://finance.yahoo.com/news/google-selects-fastly-oblivious-http-100000096.html"
                },
                {
                    "title": "Metas Year of Efficiency Still Looks Costly",
                    "source": "https://finance.yahoo.com/m/cb07606b-b0e6-37ad-aee6-b7d430a165fc/meta%E2%80%99s-%E2%80%98year-of-efficiency%E2%80%99.html"
                }
            ]
        },
        {
            "ticker": "GOOGL",
            "news_items": [
                {
                    "title": "YouTube TV users will see 13% subscription price increase",
                    "source": "https://finance.yahoo.com/news/youtube-tv-users-see-13-001856795.html"
                },
                {
                    "title": "Heres Whats Buzzing at SXSW 2023",
                    "source": "https://finance.yahoo.com/video/buzzing-sxsw-2023-000003262.html"
                },
                {
                    "title": "Microsoft adds AI tools to Office apps like Outlook, Word, Excel",
                    "source": "https://finance.yahoo.com/m/57ec78f6-777a-36c2-876f-f720a103bddc/microsoft-adds-ai-tools-to.html"
                },
                {
                    "title": "In Silicon Valley, a boom era feels like its ending",
                    "source": "https://finance.yahoo.com/m/de3d2580-c8c4-3af6-94be-710a55a1692f/in-silicon-valley%2C-a-boom-era.html"
                },
                {
                    "title": "Why Alphabet Stock Climbed Today",
                    "source": "https://finance.yahoo.com/m/2c18c91e-b2e5-37f1-8f80-9ecdd104014f/why-alphabet-stock-climbed.html"
                },
                {
                    "title": "Elon Musk fumes over OpenAI becoming $30B market cap for-profit after his $100M donation",
                    "source": "https://finance.yahoo.com/news/elon-musk-fumes-over-openai-193232779.html"
                },
                {
                    "title": "Microsofts Bing GPT-4 offers rare opportunity for market share gains",
                    "source": "https://finance.yahoo.com/m/c0d192ec-d643-3820-a459-9470154f8401/microsoft%E2%80%99s-bing-gpt-4-offers.html"
                },
                {
                    "title": "YouTube to Raise Prices on TV Offering",
                    "source": "https://finance.yahoo.com/m/bcf845b2-f6b1-366e-a23a-a61214700402/youtube-to-raise-prices-on-tv.html"
                },
                {
                    "title": "YouTube TV raises monthly price to $72.99 citing higher content costs",
                    "source": "https://finance.yahoo.com/news/youtube-tv-raises-monthly-price-to-7299-citing-higher-content-costs-190222879.html"
                },
                {
                    "title": "Microsoft to add AI co-pilot to its Office software suite",
                    "source": "https://finance.yahoo.com/m/ab75299c-cd25-3e3c-bd48-b7ee946f8605/microsoft-to-add-ai-co-pilot.html"
                }
            ]
        },
        {
            "ticker": "HON",
            "news_items": [
                {
                    "title": "Honeywell (HON) Appoints 34-Year Veteran Vimal Kapur as New CEO",
                    "source": "https://finance.yahoo.com/news/honeywell-hon-appoints-34-veteran-150703892.html"
                },
                {
                    "title": "12 Best Aerospace Stocks To Buy",
                    "source": "https://finance.yahoo.com/news/12-best-aerospace-stocks-buy-015707388.html"
                },
                {
                    "title": "Analyst Report: Honeywell International Inc.",
                    "source": "https://finance.yahoo.com/m/49ad82d0-cbe4-33b0-8f61-ee8f578b9c58/analyst-report%3A-honeywell.html"
                },
                {
                    "title": "Honeywell Taps COO Kapur as Next CEO",
                    "source": "https://finance.yahoo.com/m/d205f00a-9f08-3818-9af2-138957c06a7a/honeywell-taps-coo-kapur-as.html"
                },
                {
                    "title": "Honeywell appoints COO Vimal Kapur to succeed Darius Adamczyk as CEO",
                    "source": "https://finance.yahoo.com/m/69ce641e-cabc-3ea3-bbf3-d00ffc46f55a/honeywell-appoints-coo-vimal.html"
                },
                {
                    "title": "Honeywell company veteran Kapur to replace Adamczyk as CEO",
                    "source": "https://finance.yahoo.com/news/honeywell-names-vimal-kapur-ceo-111933324.html"
                },
                {
                    "title": "UPDATE 2-Honeywell company veteran Kapur to replace Adamczyk as CEO",
                    "source": "https://finance.yahoo.com/news/1-honeywell-names-vimal-kapur-111750371.html"
                },
                {
                    "title": "Honeywell Names 34-Year Honeywell Veteran Vimal Kapur To Succeed Darius Adamczyk As CEO On June 1, 2023; Kapur Elected To Company's Board Of Directors; Adamczyk To Serve As Executive Chairman",
                    "source": "https://finance.yahoo.com/news/honeywell-names-34-honeywell-veteran-110000038.html"
                },
                {
                    "title": "Analyst Report: Honeywell International Inc.",
                    "source": "https://finance.yahoo.com/m/611cd81a-56c4-3b78-b6b9-70e5f40fc03c/analyst-report%3A-honeywell.html"
                },
                {
                    "title": "Honeywell International Inc. (HON) Stock Moves -0.12%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/honeywell-international-inc-hon-stock-215009362.html"
                }
            ]
        },
        {
            "ticker": "IDXX",
            "news_items": [
                {
                    "title": "The total return for IDEXX Laboratories (NASDAQ:IDXX) investors has risen faster than earnings growth over the last five years",
                    "source": "https://finance.yahoo.com/news/total-return-idexx-laboratories-nasdaq-140118142.html"
                },
                {
                    "title": "TMO or IDXX: Which Is the Better Value Stock Right Now?",
                    "source": "https://finance.yahoo.com/news/tmo-idxx-better-value-stock-164004915.html"
                },
                {
                    "title": "Why Is Idexx (IDXX) Down 6.6% Since Last Earnings Report?",
                    "source": "https://finance.yahoo.com/news/why-idexx-idxx-down-6-163004554.html"
                },
                {
                    "title": "Should You Investigate IDEXX Laboratories, Inc. (NASDAQ:IDXX) At US$488?",
                    "source": "https://finance.yahoo.com/news/investigate-idexx-laboratories-inc-nasdaq-120031426.html"
                },
                {
                    "title": "Here's Why You Should Invest in IDEXX (IDXX) Stock Right Now",
                    "source": "https://finance.yahoo.com/news/heres-why-invest-idexx-idxx-161204518.html"
                },
                {
                    "title": "IDEXX (IDXX) Global Sales, Instrument Placement Robust",
                    "source": "https://finance.yahoo.com/news/idexx-idxx-global-sales-instrument-143802560.html"
                },
                {
                    "title": "How to Find Strong Medical Stocks Slated for Positive Earnings Surprises",
                    "source": "https://finance.yahoo.com/news/strong-medical-stocks-slated-positive-140002250.html"
                },
                {
                    "title": "VNRX: Nu.Q Vet Cancer Test Being Launched by Supply Agreement Partners Heska and IDEXX; 4.945 million Share Offering Completed to Help Fund Managements Initiatives",
                    "source": "https://finance.yahoo.com/news/vnrx-nu-q-vet-cancer-094200107.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights Edwards Lifesciences, IDEXX Laboratories and Hologic",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-edwards-081308822.html"
                },
                {
                    "title": "3 Medical Instruments Stocks to Buy Amid Improving Industry Trends",
                    "source": "https://finance.yahoo.com/news/3-medical-instruments-stocks-buy-152703774.html"
                }
            ]
        },
        {
            "ticker": "ILMN",
            "news_items": [
                {
                    "title": "Buy This Magnificent Growth Stock Before It's Too Late",
                    "source": "https://finance.yahoo.com/m/7549de05-1031-3442-856f-fde77d952128/buy-this-magnificent-growth.html"
                },
                {
                    "title": "Icahn urges Illumina to unwind Grail deal, pushes ahead on proxy fight",
                    "source": "https://finance.yahoo.com/news/icahn-urges-illumina-unwind-grail-185158016.html"
                },
                {
                    "title": "Icahn urges Illumina to unwind Grail deal, pushes ahead on proxy fight",
                    "source": "https://finance.yahoo.com/news/icahn-urges-illumina-unwind-grail-184644492.html"
                },
                {
                    "title": "Illumina (ILMN) Unveils Complete Long Reads Technology",
                    "source": "https://finance.yahoo.com/news/illumina-ilmn-unveils-complete-long-172505499.html"
                },
                {
                    "title": "Illumina launches its first product enabling long- and short-read sequencing on one instrument",
                    "source": "https://finance.yahoo.com/news/illumina-launches-first-product-enabling-000000686.html"
                },
                {
                    "title": "Company News for Mar 14, 2023",
                    "source": "https://finance.yahoo.com/news/company-news-mar-14-2023-132401700.html"
                },
                {
                    "title": "Illumina launches its first product enabling long- and short-read sequencing on one instrument",
                    "source": "https://finance.yahoo.com/news/illumina-launches-first-product-enabling-131500335.html"
                },
                {
                    "title": "SVB May Be a Failure of Supervision. What It Means for Other Banks.",
                    "source": "https://finance.yahoo.com/m/360cdf2d-9aa5-3e14-a945-03da8dff672d/svb-may-be-a-failure-of.html"
                },
                {
                    "title": "Illumina Surges As Activist Investor Carl Icahn Attempts To Wrest Control",
                    "source": "https://finance.yahoo.com/m/eb1d8cde-8aac-30ff-933d-88fe36b87007/illumina-surges-as-activist.html"
                },
                {
                    "title": "These Stocks Are Moving the Most Today: First Republic, Schwab, Seagen, Provention Bio, Illumina, and More",
                    "source": "https://finance.yahoo.com/m/72e8624e-cab6-3c63-be68-2d99199cb6ed/these-stocks-are-moving-the.html"
                }
            ]
        },
        {
            "ticker": "INTC",
            "news_items": [
                {
                    "title": "Why AMD, Intel, and Nvidia Stock All Rallied on Thursday",
                    "source": "https://finance.yahoo.com/m/47ef9038-9565-30c6-b9df-72fd42399eda/why-amd%2C-intel%2C-and-nvidia.html"
                },
                {
                    "title": "The Worst Is Over For PC, Smartphone Chip Stocks, Analyst Says",
                    "source": "https://finance.yahoo.com/m/6b0a4cb4-906a-304c-9351-2b6b588768d5/the-worst-is-over-for-pc%2C.html"
                },
                {
                    "title": "Why Microsoft, Advanced Micro Devices, and Qualcomm Were Surging Today",
                    "source": "https://finance.yahoo.com/m/d51d8ee8-f58b-3041-bbe5-202ce0d8033b/why-microsoft%2C-advanced-micro.html"
                },
                {
                    "title": "Intels stock nabs an upgrade: Things are moving enough in the right direction.",
                    "source": "https://finance.yahoo.com/m/1427cb7b-01a8-3734-82bc-1e33968fd77d/intel%E2%80%99s-stock-nabs-an.html"
                },
                {
                    "title": "Best Dividend Stock to Buy: Verizon vs. Ford vs. Intel vs. AT&T",
                    "source": "https://finance.yahoo.com/m/0b80a140-2135-3c8f-baad-8edc2cb907d6/best-dividend-stock-to-buy%3A.html"
                },
                {
                    "title": "Is AMD Stock A Buy Before Chipmaker's March-Quarter Report?",
                    "source": "https://finance.yahoo.com/m/776dffee-64af-3502-ad20-38a315d1693e/is-amd-stock-a-buy-before.html"
                },
                {
                    "title": "20 Largest Semiconductor Companies in the World",
                    "source": "https://finance.yahoo.com/news/20-largest-semiconductor-companies-world-113454953.html"
                },
                {
                    "title": "Is It Time to Buy the Dow Jones' 3 Worst-Performing February (and Now March) Stocks?",
                    "source": "https://finance.yahoo.com/m/161e8a18-fd67-3e29-9400-7011273e9d46/is-it-time-to-buy-the-dow.html"
                },
                {
                    "title": "Intel (INTC) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/intel-intc-gains-market-dips-214509701.html"
                },
                {
                    "title": "Meta cuts more jobs in latest tech layoffs",
                    "source": "https://finance.yahoo.com/m/0fba6cc2-3d87-3037-b547-f2d80a477d38/meta-cuts-more-jobs-in-latest.html"
                }
            ]
        },
        {
            "ticker": "INTU",
            "news_items": [
                {
                    "title": "26 Companies that Donate to Nonprofits",
                    "source": "https://finance.yahoo.com/news/26-companies-donate-nonprofits-170818162.html"
                },
                {
                    "title": "Intuit (INTU) Introduces QuickBooks Small Business Index",
                    "source": "https://finance.yahoo.com/news/intuit-intu-introduces-quickbooks-small-155803694.html"
                },
                {
                    "title": "15 Best Dividend Paying Stocks To Buy Now",
                    "source": "https://finance.yahoo.com/news/15-best-dividend-paying-stocks-130524350.html"
                },
                {
                    "title": "Intuit Announces Innovative, Multiyear Fund to Support Solar Power and Provide Educational Opportunities",
                    "source": "https://finance.yahoo.com/news/intuit-announces-innovative-multiyear-fund-123000010.html"
                },
                {
                    "title": "Intuit Launches New QuickBooks Small Business Index, Providing Unique and Up-To-Date Insight Into Small Business Economy Through Hiring and Employment Data",
                    "source": "https://finance.yahoo.com/news/intuit-launches-quickbooks-small-business-070100500.html"
                },
                {
                    "title": "Intuit Launches New QuickBooks Small Business Index, Providing Unique and Up-To-Date Insight Into Small Business Economy Through Employment and Hiring Data",
                    "source": "https://finance.yahoo.com/news/intuit-launches-quickbooks-small-business-070100998.html"
                },
                {
                    "title": "The Zacks Analyst Blog Highlights NVIDIA, McDonald's, Intuit, AT&T and Regeneron Pharmaceuticals",
                    "source": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-nvidia-145702260.html"
                },
                {
                    "title": "Top Analyst Reports for NVIDIA, McDonald's & Intuit",
                    "source": "https://finance.yahoo.com/news/top-analyst-reports-nvidia-mcdonalds-180906124.html"
                },
                {
                    "title": "13 Best Software Stocks To Invest In According To Hedge Funds",
                    "source": "https://finance.yahoo.com/news/13-best-software-stocks-invest-141835980.html"
                },
                {
                    "title": "Credit Karma Aims to Help Millions of Americans Know, Grow and Protect Their Net Worth",
                    "source": "https://finance.yahoo.com/news/credit-karma-aims-help-millions-140000438.html"
                }
            ]
        },
        {
            "ticker": "ISRG",
            "news_items": [
                {
                    "title": "Intuitive Surgical, Inc. (ISRG) Stock Moves -0.47%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/intuitive-surgical-inc-isrg-stock-220010624.html"
                },
                {
                    "title": "2 Unstoppable Growth Stocks to Buy and Hold Forever",
                    "source": "https://finance.yahoo.com/m/565a2618-5b91-31fb-a37b-4aaa56e05964/2-unstoppable-growth-stocks.html"
                },
                {
                    "title": "Intuitive Surgical (NASDAQ:ISRG) Will Want To Turn Around Its Return Trends",
                    "source": "https://finance.yahoo.com/news/intuitive-surgical-nasdaq-isrg-want-110049232.html"
                },
                {
                    "title": "3 Genius Stocks to Buy if the Fed Induces a Recession",
                    "source": "https://finance.yahoo.com/m/7dd41c5b-cae8-3c84-804f-797150b40dc7/3-genius-stocks-to-buy-if-the.html"
                },
                {
                    "title": "Intuitive Surgical, Inc. (ISRG) Outpaces Stock Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/intuitive-surgical-inc-isrg-outpaces-230011466.html"
                },
                {
                    "title": "2 Healthcare Stocks That Could Help Make You a Fortune",
                    "source": "https://finance.yahoo.com/m/bc1c2f59-5ce0-3123-ad66-152335ec8848/2-healthcare-stocks-that.html"
                },
                {
                    "title": "Intuitive Surgical, Inc. (NASDAQ:ISRG) is largely controlled by institutional shareholders who own 86% of the company",
                    "source": "https://finance.yahoo.com/news/intuitive-surgical-inc-nasdaq-isrg-110055411.html"
                },
                {
                    "title": "Want $1 Million in Retirement? Invest $200,000 in These 2 Stocks in 2023 and Wait at Least a Decade",
                    "source": "https://finance.yahoo.com/m/5ebd9ae0-f1c9-3df4-a793-c0d90a1b28c7/want-%241-million-in.html"
                },
                {
                    "title": "Heres Why ClearBridge Large Cap Growth Strategy is Holding Intuitive Surgical (ISRG)",
                    "source": "https://finance.yahoo.com/news/why-clearbridge-large-cap-growth-123655721.html"
                },
                {
                    "title": "What Is the Best AI Stock to Buy Now? Our 3 Top Picks",
                    "source": "https://finance.yahoo.com/news/best-ai-stock-buy-now-235219895.html"
                }
            ]
        },
        {
            "ticker": "JD",
            "news_items": [
                {
                    "title": "20 Largest Retailers in the World",
                    "source": "https://finance.yahoo.com/news/20-largest-retailers-world-140856560.html"
                },
                {
                    "title": "10 Biggest Real Estate Companies in China",
                    "source": "https://finance.yahoo.com/news/10-biggest-real-estate-companies-155449038.html"
                },
                {
                    "title": "JD.com, Inc.'s (NASDAQ:JD) Fundamentals Look Pretty Strong: Could The Market Be Wrong About The Stock?",
                    "source": "https://finance.yahoo.com/news/jd-com-inc-nasdaq-jd-130025225.html"
                },
                {
                    "title": "JD.com Is Down 60% From Its High. Time to Buy?",
                    "source": "https://finance.yahoo.com/m/47a0df5e-8d5c-33cf-aedd-158edd3645de/jd.com-is-down-60%25-from-its.html"
                },
                {
                    "title": "JD.com, Inc. (NASDAQ:JD) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/jd-com-inc-nasdaq-jd-081445809.html"
                },
                {
                    "title": "JD.com Stock Likely Stays In Penalty Box In Near Term, Analyst Says Post Q4 Results",
                    "source": "https://finance.yahoo.com/news/jd-com-stock-likely-stays-210005221.html"
                },
                {
                    "title": "Analyst Report: JD.com, Inc.",
                    "source": "https://finance.yahoo.com/m/4bcc8f3d-b5e4-34c2-a452-a0f552a87a87/analyst-report%3A-jd.com%2C-inc..html"
                },
                {
                    "title": "JD.com Shares Drop on cautious Outlook for Consumer Recovery",
                    "source": "https://finance.yahoo.com/news/jd-sales-rise-7-chinese-105125398.html"
                },
                {
                    "title": "JD.com shares slump in Hong Kong after weaker-than-expected revenue guidance",
                    "source": "https://finance.yahoo.com/m/6d229f0e-9bc1-3182-b589-b6763946fdd0/jd.com-shares-slump-in-hong.html"
                },
                {
                    "title": "Q4 2022 Dada Nexus Ltd Earnings Call",
                    "source": "https://finance.yahoo.com/news/q4-2022-dada-nexus-ltd-221423282.html"
                }
            ]
        },
        {
            "ticker": "KDP",
            "news_items": [
                {
                    "title": "Keurig Dr Pepper CFO Sudhanshu Priyadarshi Bought Up Stock",
                    "source": "https://finance.yahoo.com/m/fe1bd6d4-50e9-3368-8e15-72c8c6aa1ab3/keurig-dr-pepper-cfo.html"
                },
                {
                    "title": "The Chief Financial Officer of Keurig Dr Pepper Inc. (NASDAQ:KDP), Sudhanshu Priyadarshi, Just Bought 167% More Shares",
                    "source": "https://finance.yahoo.com/news/chief-financial-officer-keurig-dr-104730680.html"
                },
                {
                    "title": "Daily  Vickers Top Buyers & Sellers for 03/08/2023",
                    "source": "https://finance.yahoo.com/m/40f753d8-e3a6-3d23-9e20-ef35ad0849a1/daily-%E2%80%93-vickers-top-buyers-%26.html"
                },
                {
                    "title": "Daily  Vickers Top Buyers & Sellers for 03/07/2023",
                    "source": "https://finance.yahoo.com/m/46026c7b-9859-3c0a-9bc5-fab69c584a0e/daily-%E2%80%93-vickers-top-buyers-%26.html"
                },
                {
                    "title": "Daily  Vickers Top Buyers & Sellers for 03/06/2023",
                    "source": "https://finance.yahoo.com/m/29ee91b7-ed86-32c5-b813-fcc6273e8620/daily-%E2%80%93-vickers-top-buyers-%26.html"
                },
                {
                    "title": "Daily  Vickers Top Buyers & Sellers for 03/02/2023",
                    "source": "https://finance.yahoo.com/m/6d63de50-5711-3aaf-a468-6bb63acb30a8/daily-%E2%80%93-vickers-top-buyers-%26.html"
                },
                {
                    "title": "Keurig Dr Pepper Announces New Corporate Community Impact Partnership with the Red Cross",
                    "source": "https://finance.yahoo.com/news/keurig-dr-pepper-announces-corporate-140000908.html"
                },
                {
                    "title": "Keurig Dr Pepper Inc. (NASDAQ:KDP) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/keurig-dr-pepper-inc-nasdaq-094056168.html"
                },
                {
                    "title": "Analyst Report: Keurig Dr Pepper Inc.",
                    "source": "https://finance.yahoo.com/m/271771df-cad6-31f5-885c-06fa0e016d08/analyst-report%3A-keurig-dr.html"
                },
                {
                    "title": "Keurig Dr Pepper Full Year 2022 Earnings: EPS Misses Expectations",
                    "source": "https://finance.yahoo.com/news/keurig-dr-pepper-full-2022-101745341.html"
                }
            ]
        },
        {
            "ticker": "KHC",
            "news_items": [
                {
                    "title": "Kraft Heinz (KHC) Stock Moves -0.08%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/kraft-heinz-khc-stock-moves-220010240.html"
                },
                {
                    "title": "Kraft Heinz Lunchables to be part of the National School Lunch Program this fall",
                    "source": "https://finance.yahoo.com/news/kraft-heinz-lunchables-to-be-part-of-the-national-school-lunch-program-this-fall-200327509.html"
                },
                {
                    "title": "Nasdaq Bear Market: These 3 Stocks Are Trading Below Their Book Values",
                    "source": "https://finance.yahoo.com/m/cfed92f2-4d90-37d7-af77-b8865ecd9755/nasdaq-bear-market%3A-these-3.html"
                },
                {
                    "title": "Has Warren Buffett Lost His Touch? 2 Berkshire Stocks to Sell Now",
                    "source": "https://finance.yahoo.com/m/e25db969-062e-39bc-a628-8584975c5ed5/has-warren-buffett-lost-his.html"
                },
                {
                    "title": "AI Food Startup NotCo Hires Activisions Fernando Machado as CMO",
                    "source": "https://finance.yahoo.com/m/ed8be091-26a2-3d7c-8a7f-61d65062adb9/ai-food-startup-notco-hires.html"
                },
                {
                    "title": "Kraft Heinz (KHC) Stock Moves -1.38%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/kraft-heinz-khc-stock-moves-225010138.html"
                },
                {
                    "title": "Kraft Heinz (KHC) Stock Sinks As Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/kraft-heinz-khc-stock-sinks-230011238.html"
                },
                {
                    "title": "Analyst Report: The Kraft Heinz Company",
                    "source": "https://finance.yahoo.com/m/6faaa1b3-886a-31ed-bcf6-c6e36f333f81/analyst-report%3A-the-kraft.html"
                },
                {
                    "title": "Don't Buy The Kraft Heinz Company (NASDAQ:KHC) For Its Next Dividend Without Doing These Checks",
                    "source": "https://finance.yahoo.com/news/dont-buy-kraft-heinz-company-121958328.html"
                },
                {
                    "title": "Big Food Brands Struggling to Kick Junk Addiction, Survey Finds",
                    "source": "https://finance.yahoo.com/news/big-food-brands-struggling-kick-000100529.html"
                }
            ]
        },
        {
            "ticker": "KLAC",
            "news_items": [
                {
                    "title": "Calculating The Fair Value Of KLA Corporation (NASDAQ:KLAC)",
                    "source": "https://finance.yahoo.com/news/calculating-fair-value-kla-corporation-194307532.html"
                },
                {
                    "title": "KLA Announces Upcoming Investor Webcast",
                    "source": "https://finance.yahoo.com/news/kla-announces-upcoming-investor-webcast-210500198.html"
                },
                {
                    "title": "Semiconductor Inspection Company's Growth Soars, But How Long Will It Last?",
                    "source": "https://finance.yahoo.com/m/7f0b2302-583f-3422-9098-6e8c33064ec2/semiconductor-inspection.html"
                },
                {
                    "title": "KLA Declares Regular Cash Dividend",
                    "source": "https://finance.yahoo.com/news/kla-declares-regular-cash-dividend-230000876.html"
                },
                {
                    "title": "Analyst Report: KLA Corp.",
                    "source": "https://finance.yahoo.com/m/ffbc6eb2-9f6d-3df3-acab-11bb36080263/analyst-report%3A-kla-corp..html"
                },
                {
                    "title": "Market Digest: CSX, DHR, ETD, FHI, INTC, KLAC, LUV, NUE, TRV, VLO, WY, ZION, AAL, NOW, DOW",
                    "source": "https://finance.yahoo.com/m/43911a8e-00cc-3b24-8f70-01879b10c962/market-digest%3A-csx%2C-dhr%2C-etd%2C.html"
                },
                {
                    "title": "KLA Second Quarter 2023 Earnings: Beats Expectations",
                    "source": "https://finance.yahoo.com/news/kla-second-quarter-2023-earnings-125310355.html"
                },
                {
                    "title": "These 2 Stocks Chipped Away at the Nasdaq Friday",
                    "source": "https://finance.yahoo.com/m/805a3f38-432b-378d-a58e-f4f087d6198a/these-2-stocks-chipped-away.html"
                },
                {
                    "title": "Analyst Report: KLA Corporation",
                    "source": "https://finance.yahoo.com/m/ac07f9dd-965d-3c57-8ad0-7900e040f2cd/analyst-report%3A-kla.html"
                },
                {
                    "title": "Stocks moving in after hours: Intel, KLA Corp., Visa, Hasbro, Salesforce",
                    "source": "https://finance.yahoo.com/video/stocks-moving-hours-intel-kla-220217842.html"
                }
            ]
        },
        {
            "ticker": "LCID",
            "news_items": [
                {
                    "title": "Lucid Stock Investors Need to Buckle Up for a Bumpy Ride",
                    "source": "https://finance.yahoo.com/news/lucid-stock-investors-buckle-bumpy-110034306.html"
                },
                {
                    "title": "EV Startups Brace for Another Tough Year as Cash Dwindles",
                    "source": "https://finance.yahoo.com/m/85e6d663-da81-32f2-b768-e13651054dcf/ev-startups-brace-for-another.html"
                },
                {
                    "title": "Ford's 'balanced' electric bet faces crucial 2023 as restructuring takes hold",
                    "source": "https://finance.yahoo.com/news/fords-balanced-electric-bet-faces-crucial-2023-as-restructuring-takes-hold-152454125.html"
                },
                {
                    "title": "Is Lucid (LCID) Stock a Buy? Heres My Call.",
                    "source": "https://finance.yahoo.com/news/lucid-lcid-stock-buy-call-165217687.html"
                },
                {
                    "title": "Move Over EVs, Hybrids Are Hot in China",
                    "source": "https://finance.yahoo.com/m/496dcc52-897f-32ba-8f9a-89e6f4ac4a0d/move-over-evs%2C-hybrids-are.html"
                },
                {
                    "title": "Biggest takeaways from the automotive, EV industry this earnings season",
                    "source": "https://finance.yahoo.com/video/biggest-takeaways-automotive-ev-industry-211757186.html"
                },
                {
                    "title": "EV Stocks Fall After Lucid Cuts Production Target, Lordstown Component Issues",
                    "source": "https://finance.yahoo.com/m/614b2090-6ba5-3bc8-a589-a3755907f8ee/ev-stocks-fall-after-lucid.html"
                },
                {
                    "title": "Lucid stock declines after missing on Q4 revenue estimates",
                    "source": "https://finance.yahoo.com/video/lucid-stock-declines-missing-q4-143722032.html"
                },
                {
                    "title": "EV Startups Have a New Bottleneck: Demand",
                    "source": "https://finance.yahoo.com/m/104df1f2-b912-3a65-89b2-3ee17c9b5749/ev-startups-have-a-new.html"
                },
                {
                    "title": "EV Startup Lucid Aims to Nearly Double Production in 2023",
                    "source": "https://finance.yahoo.com/m/aab9eafc-a183-3b26-b31a-21d4e0001d8f/ev-startup-lucid-aims-to.html"
                }
            ]
        },
        {
            "ticker": "LRCX",
            "news_items": [
                {
                    "title": "Lam Research (LRCX) Dips More Than Broader Markets: What You Should Know",
                    "source": "https://finance.yahoo.com/news/lam-research-lrcx-dips-more-215009916.html"
                },
                {
                    "title": "6 big analyst cuts: Norfolk Southern stock slashed on Ohio derailments | Pro Recap",
                    "source": "https://finance.yahoo.com/news/5-big-analyst-cuts-lam-085411551.html"
                },
                {
                    "title": "Meta cuts more jobs in latest tech layoffs",
                    "source": "https://finance.yahoo.com/m/0fba6cc2-3d87-3037-b547-f2d80a477d38/meta-cuts-more-jobs-in-latest.html"
                },
                {
                    "title": "Lam Research Named as One of Ethisphere's 2023 World's Most Ethical Companiesu00ae",
                    "source": "https://finance.yahoo.com/news/lam-research-named-one-ethispheres-040000412.html"
                },
                {
                    "title": "Lam Research (LRCX) Dips More Than Broader Markets: What You Should Know",
                    "source": "https://finance.yahoo.com/news/lam-research-lrcx-dips-more-220010667.html"
                },
                {
                    "title": "Lam Research Named as One of Ethisphere's 2023 World's Most Ethical Companiesu00ae",
                    "source": "https://finance.yahoo.com/news/lam-research-named-one-ethispheres-100500095.html"
                },
                {
                    "title": "Got $3,000? 3 Tech Stocks to Buy and Hold for the Long Term",
                    "source": "https://finance.yahoo.com/m/f1828cb2-6901-3fd3-ab67-a124184fe240/got-%243%2C000%3F-3-tech-stocks-to.html"
                },
                {
                    "title": "Alphabet, Lam Research Make Morningstar Favored-Stock List",
                    "source": "https://finance.yahoo.com/m/892d8919-d30a-3c01-9b6d-95c6090f9eec/alphabet%2C-lam-research-make.html"
                },
                {
                    "title": "There's A Lot To Like About Lam Research's (NASDAQ:LRCX) Upcoming US$1.73 Dividend",
                    "source": "https://finance.yahoo.com/news/theres-lot-lam-researchs-nasdaq-110325065.html"
                },
                {
                    "title": "Lam Research (LRCX) Stock Moves -1.15%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/lam-research-lrcx-stock-moves-225010299.html"
                }
            ]
        },
        {
            "ticker": "LULU",
            "news_items": [
                {
                    "title": "Forget Pots & Pans, What Medical Professionals Really Want Are FIGS",
                    "source": "https://finance.yahoo.com/news/forget-pots-pans-medical-professionals-120044572.html"
                },
                {
                    "title": "2 Undervalued Apparel Stocks I'd Buy in a Heartbeat",
                    "source": "https://finance.yahoo.com/m/5cade257-49b8-3b3e-8747-f464a57fca0e/2-undervalued-apparel-stocks.html"
                },
                {
                    "title": "Lululemon (LULU) Stock Moves -0.63%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/lululemon-lulu-stock-moves-0-215009211.html"
                },
                {
                    "title": "Guess (GES) Surpasses Q4 Earnings and Revenue Estimates",
                    "source": "https://finance.yahoo.com/news/guess-ges-surpasses-q4-earnings-214509333.html"
                },
                {
                    "title": "CROX vs. LULU: Which Stock Should Value Investors Buy Now?",
                    "source": "https://finance.yahoo.com/news/crox-vs-lulu-stock-value-154003197.html"
                },
                {
                    "title": "lululemon athletica inc. Announces Fourth Quarter and Full Year Fiscal 2022 Earnings Conference Call",
                    "source": "https://finance.yahoo.com/news/lululemon-athletica-inc-announces-fourth-103000761.html"
                },
                {
                    "title": "Will Lululemon (LULU) Beat Estimates Again in Its Next Earnings Report?",
                    "source": "https://finance.yahoo.com/news/lululemon-lulu-beat-estimates-again-161004386.html"
                },
                {
                    "title": "15 Most Valuable Clothing Companies in the World",
                    "source": "https://finance.yahoo.com/news/15-most-valuable-clothing-companies-140356433.html"
                },
                {
                    "title": "How to Find Strong Consumer Discretionary Stocks Slated for Positive Earnings Surprises",
                    "source": "https://finance.yahoo.com/news/strong-consumer-discretionary-stocks-slated-130001574.html"
                },
                {
                    "title": "Figs Stock Is Down Nearly 90% From Its High. Time to Buy?",
                    "source": "https://finance.yahoo.com/m/b7ece372-b1e0-382d-a34f-118b2c88215b/figs-stock-is-down-nearly-90%25.html"
                }
            ]
        },
        {
            "ticker": "MAR",
            "news_items": [
                {
                    "title": "Why Is Marriott (MAR) Down 12.3% Since Last Earnings Report?",
                    "source": "https://finance.yahoo.com/news/why-marriott-mar-down-12-153003033.html"
                },
                {
                    "title": "Analyst Report: Marriott International, Inc.",
                    "source": "https://finance.yahoo.com/m/e70a4b25-b5c6-3ed7-b70a-6941e19bdbc9/analyst-report%3A-marriott.html"
                },
                {
                    "title": "Analyst Report: Marriott International, Inc.",
                    "source": "https://finance.yahoo.com/m/3cd75728-f2a2-32db-8d20-29d3cc61598a/analyst-report%3A-marriott.html"
                },
                {
                    "title": "Market Update: BJ, D, MAR, BYND",
                    "source": "https://finance.yahoo.com/m/7bc257fc-fa5a-3286-b1df-e70886dd8f88/market-update%3A-bj%2C-d%2C-mar%2C.html"
                },
                {
                    "title": "30 Best Hotels in Canada",
                    "source": "https://finance.yahoo.com/news/30-best-hotels-canada-134129190.html"
                },
                {
                    "title": "Marriott International Board of Directors Announces Two New Directors",
                    "source": "https://finance.yahoo.com/news/marriott-international-board-directors-announces-120000477.html"
                },
                {
                    "title": "Here's Why You Should Retain Marriott (MAR) in Your Portfolio",
                    "source": "https://finance.yahoo.com/news/heres-why-retain-marriott-mar-163704918.html"
                },
                {
                    "title": "Honeywell (HON), Marriott Unite to Boost Guest Experience",
                    "source": "https://finance.yahoo.com/news/honeywell-hon-marriott-unite-boost-150503631.html"
                },
                {
                    "title": "Marriott International Receives Regulatory Approval To Complete City Express Brand Acquisition",
                    "source": "https://finance.yahoo.com/news/marriott-international-receives-regulatory-approval-133000561.html"
                },
                {
                    "title": "Thinking of Buying Host Hotels? Here Are The Properties And Tenants You'd Be Adding To Your Portfolio",
                    "source": "https://finance.yahoo.com/news/thinking-buying-host-hotels-properties-204758112.html"
                }
            ]
        },
        {
            "ticker": "MCHP",
            "news_items": [
                {
                    "title": "Zacks Investment Ideas feature highlights: Silicon Valley Bank, Impinj, Delta Airlines, Rambu and Microchip Technology",
                    "source": "https://finance.yahoo.com/news/zacks-investment-ideas-feature-highlights-120612609.html"
                },
                {
                    "title": "Chips, energy and an Amazon rival: Stock picks from a fund manager with three decades of experience",
                    "source": "https://finance.yahoo.com/m/72bb88e6-fa72-3d6b-970c-c609d8d2db9f/chips%2C-energy-and-an-amazon.html"
                },
                {
                    "title": "Put These 5 Relative Price Strength Stocks on Your Radar",
                    "source": "https://finance.yahoo.com/news/put-5-relative-price-strength-160304263.html"
                },
                {
                    "title": "The Zacks Analyst Blog Highlights Ameriprise Financial, Everest Re Group, Microchip Technology, Henry Schein and HSBC Holdings",
                    "source": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-ameriprise-130401119.html"
                },
                {
                    "title": "Zacks Industry Outlook Highlights Analog Devices, Microchip Technology and Silicon Laboratories",
                    "source": "https://finance.yahoo.com/news/zacks-industry-outlook-highlights-analog-124912190.html"
                },
                {
                    "title": "Best Growth Stocks to Buy for March 15th",
                    "source": "https://finance.yahoo.com/news/best-growth-stocks-buy-march-095209787.html"
                },
                {
                    "title": "Web of Secret Chip Deals Allegedly Help US Tech Flow to Russia",
                    "source": "https://finance.yahoo.com/news/secret-chip-deals-allegedly-help-040134984.html"
                },
                {
                    "title": "3 Solid Buys from the Semiconductor Industry",
                    "source": "https://finance.yahoo.com/news/3-solid-buys-semiconductor-industry-170005747.html"
                },
                {
                    "title": "Fed May Stick to 25 bps Rate Hike After SVB Fiasco: 5 Picks",
                    "source": "https://finance.yahoo.com/news/fed-may-stick-25-bps-124012052.html"
                },
                {
                    "title": "Microchip Expands its Secure Authentication IC Portfolio",
                    "source": "https://finance.yahoo.com/news/microchip-expands-secure-authentication-ic-120000529.html"
                }
            ]
        },
        {
            "ticker": "MDLZ",
            "news_items": [
                {
                    "title": "Mondelez Takes Next Step in Wheat Sustainability Program",
                    "source": "https://finance.yahoo.com/news/mondelez-takes-next-step-wheat-203500989.html"
                },
                {
                    "title": "Kelloggs Snack Company Gets New Latin-Inspired Name, Kellanova",
                    "source": "https://finance.yahoo.com/m/734285fe-4865-3a00-98d5-3bacc728ffd0/kellogg%E2%80%99s-snack-company-gets.html"
                },
                {
                    "title": "Mondelez (MDLZ) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/mondelez-mdlz-gains-lags-market-221510868.html"
                },
                {
                    "title": "Mondelez International Stock Shows Rising Relative Strength Upgrade",
                    "source": "https://finance.yahoo.com/m/edab24b0-49da-3668-8856-0a7546e22f22/mondelez-international-stock.html"
                },
                {
                    "title": "Chips Ahoy!u00ae Kicks off Epic Birthday by Hosting Fans with the Ultimate Celebration",
                    "source": "https://finance.yahoo.com/news/chips-ahoy-kicks-off-epic-130000169.html"
                },
                {
                    "title": "McCormick (MKC) Down More Than 15% in 3 Months: Here's Why",
                    "source": "https://finance.yahoo.com/news/mccormick-mkc-down-more-15-152103796.html"
                },
                {
                    "title": "Martina Shares Advice to the Next Generation of FMCG Leaders",
                    "source": "https://finance.yahoo.com/news/martina-shares-advice-next-generation-213000735.html"
                },
                {
                    "title": "Hain Celestial (HAIN) Down 10.1% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/hain-celestial-hain-down-10-163004251.html"
                },
                {
                    "title": "Analyst Report: Mondelez International, Inc.",
                    "source": "https://finance.yahoo.com/m/5bb30ed8-e502-3749-a67f-27efb58a9deb/analyst-report%3A-mondelez.html"
                },
                {
                    "title": "United Natural (UNFI) Q2 Earnings Miss Estimates, Sales Rise",
                    "source": "https://finance.yahoo.com/news/united-natural-unfi-q2-earnings-143202200.html"
                }
            ]
        },
        {
            "ticker": "MELI",
            "news_items": [
                {
                    "title": "EMERGING MARKETS-Latam FX slips for sixth session as bank rout woes deepen",
                    "source": "https://finance.yahoo.com/news/emerging-markets-latam-fx-slips-160311660.html"
                },
                {
                    "title": "MercadoLibre to invest $3.6 billion in Brazil this year",
                    "source": "https://finance.yahoo.com/news/mercadolibre-invest-3-6-billion-153005295.html"
                },
                {
                    "title": "UPDATE 1-MercadoLibre to invest $3.6 billion in Brazil this year",
                    "source": "https://finance.yahoo.com/news/1-mercadolibre-invest-3-6-152455602.html"
                },
                {
                    "title": "Is Trending Stock MercadoLibre, Inc. (MELI) a Buy Now?",
                    "source": "https://finance.yahoo.com/news/trending-stock-mercadolibre-inc-meli-130001291.html"
                },
                {
                    "title": "Earnings Estimates Rising for MercadoLibre (MELI): Will It Gain?",
                    "source": "https://finance.yahoo.com/news/earnings-estimates-rising-mercadolibre-meli-162004053.html"
                },
                {
                    "title": "Zacks.com featured highlights include MercadoLibre, iRadimed, Northeast Community Bancorp and AAON",
                    "source": "https://finance.yahoo.com/news/zacks-com-featured-highlights-mercadolibre-122112577.html"
                },
                {
                    "title": "Baidu and Walker & Dunlop have been highlighted as Zacks Bull and Bear of the Day",
                    "source": "https://finance.yahoo.com/news/baidu-walker-dunlop-highlighted-zacks-120612436.html"
                },
                {
                    "title": "MercadoLibre (MELI) Dips More Than Broader Markets: What You Should Know",
                    "source": "https://finance.yahoo.com/news/mercadolibre-meli-dips-more-broader-220010806.html"
                },
                {
                    "title": "12 Most Promising Fintech Stocks To Buy",
                    "source": "https://finance.yahoo.com/news/12-most-promising-fintech-stocks-163501091.html"
                },
                {
                    "title": "Top Cathie Wood Stock Poised for Explosive Upside: Key Level to Watch",
                    "source": "https://finance.yahoo.com/news/top-cathie-wood-stock-poised-160904235.html"
                }
            ]
        },
        {
            "ticker": "META",
            "news_items": [
                {
                    "title": "3 Big Tech Stocks are Holding Up the Entire Market",
                    "source": "https://finance.yahoo.com/news/3-big-tech-stocks-holding-223010663.html"
                },
                {
                    "title": "3 Stocks Stealing the Show in March",
                    "source": "https://finance.yahoo.com/news/3-stocks-stealing-show-march-212309903.html"
                },
                {
                    "title": "A Suburban Pennsylvania County Is Suing Meta, TikTok, and Other Social Media Platforms",
                    "source": "https://finance.yahoo.com/m/04e73c06-4edc-3a37-adf8-6c70b93cf1a6/a-suburban-pennsylvania.html"
                },
                {
                    "title": "Snaps insane monetization is making it a new creator favorite, attracting stars like David Dobrik and paying another creator more than $10,000 some days",
                    "source": "https://finance.yahoo.com/news/snap-insane-monetization-making-creator-163157567.html"
                },
                {
                    "title": "Snap immediate beneficiary of a U.S.-TikTok ban, analyst says",
                    "source": "https://finance.yahoo.com/video/snap-immediate-beneficiary-u-tiktok-145312138.html"
                },
                {
                    "title": "What Meta Platforms and Netflix Investors Should Know About Recent Updates",
                    "source": "https://finance.yahoo.com/m/f5e99622-ba5a-3b86-99d9-3f9a8304fd15/what-meta-platforms-and.html"
                },
                {
                    "title": "TikTok dismisses call for Chinese owners to sell their stakes, but Snaps stock rockets amid prospect of U.S. ban",
                    "source": "https://finance.yahoo.com/m/14d699b3-8df1-39b3-8d75-7a194d6e39d8/tiktok-dismisses-call-for.html"
                },
                {
                    "title": "Dina Srinivasan: exposing the monopoly power of Facebook and Google",
                    "source": "https://finance.yahoo.com/m/82af2e77-ad76-379e-ad4f-bae967073ecb/dina-srinivasan%3A-exposing-the.html"
                },
                {
                    "title": "Meta Platforms (META) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/meta-platforms-meta-gains-market-214509815.html"
                },
                {
                    "title": "Facebook Ireland Guilty Of User Privacy Breach During 2010-2020, Dutch Court Finds",
                    "source": "https://finance.yahoo.com/news/facebook-ireland-guilty-user-privacy-194707598.html"
                }
            ]
        },
        {
            "ticker": "MNST",
            "news_items": [
                {
                    "title": "You'll Never Guess the Top-Performing Stock of the Last 20 Years",
                    "source": "https://finance.yahoo.com/news/youll-never-guess-top-performing-173152489.html"
                },
                {
                    "title": "A Monster Beverage Stock Split Is Coming Soon",
                    "source": "https://finance.yahoo.com/news/monster-beverage-stock-split-coming-220950681.html"
                },
                {
                    "title": "10 S&P 500 Stocks Are Practically Immune To More Fed Rate Hikes",
                    "source": "https://finance.yahoo.com/m/83963a8c-79f4-3b55-a62d-81a42bde2f64/10-s%26p-500-stocks-are.html"
                },
                {
                    "title": "Tesla and Apple rise premarket; Norfolk Southern and Lordstown Motors fall",
                    "source": "https://finance.yahoo.com/news/tesla-apple-rise-premarket-norfolk-081120631.html"
                },
                {
                    "title": "Monster Beverage Corporation (NASDAQ:MNST) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/monster-beverage-corporation-nasdaq-mnst-022111368.html"
                },
                {
                    "title": "Market Update: CNP, EQIX, MNST, HPQ, HUM, LNT, TGT",
                    "source": "https://finance.yahoo.com/m/759a7e9b-225c-3a41-aec9-6910d4e40d19/market-update%3A-cnp%2C-eqix%2C.html"
                },
                {
                    "title": "Analyst Report: Monster Beverage Corp.",
                    "source": "https://finance.yahoo.com/m/8de0a493-7963-3f02-9c14-0c9ee821dd8e/analyst-report%3A-monster.html"
                },
                {
                    "title": "Market Update: CNP, EQIX, MNST, HPQ, HUM, LNT, TGT",
                    "source": "https://finance.yahoo.com/m/c270d86c-4485-38e2-9fcc-ada92580d8c9/market-update%3A-cnp%2C-eqix%2C.html"
                },
                {
                    "title": "Q4 2022 Monster Beverage Corp Earnings Call",
                    "source": "https://finance.yahoo.com/news/q4-2022-monster-beverage-corp-160603059.html"
                },
                {
                    "title": "Monster Beverage (MNST) Dips on Q4 Earnings & Sales Miss",
                    "source": "https://finance.yahoo.com/news/monster-beverage-mnst-dips-q4-153003211.html"
                }
            ]
        },
        {
            "ticker": "MRNA",
            "news_items": [
                {
                    "title": "Moderna (MRNA) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/moderna-mrna-gains-lags-market-214509832.html"
                },
                {
                    "title": "This High-Growth Company Is Expanding. Time to Buy the Stock?",
                    "source": "https://finance.yahoo.com/m/7bf3ff7c-20df-30ff-b9a5-4c44b0232abb/this-high-growth-company-is.html"
                },
                {
                    "title": "Pfizer (PFE) Gets FDA Nod for Bivalent COVID Jab in Infants",
                    "source": "https://finance.yahoo.com/news/pfizer-pfe-gets-fda-nod-183806798.html"
                },
                {
                    "title": "Is Moderna Stock A Sell After Waning Covid Shots Crush Its 2023 Outlook?",
                    "source": "https://finance.yahoo.com/m/f9052a6a-850a-311f-b634-4df6e6789dab/is-moderna-stock-a-sell-after.html"
                },
                {
                    "title": "Moderna, Inc. (MRNA) is Attracting Investor Attention: Here is What You Should Know",
                    "source": "https://finance.yahoo.com/news/moderna-inc-mrna-attracting-investor-130001917.html"
                },
                {
                    "title": "2 Top Biotech Stocks to Buy for the Long Haul",
                    "source": "https://finance.yahoo.com/m/38b267a2-4bdc-3476-9cce-52ec19e0e9d6/2-top-biotech-stocks-to-buy.html"
                },
                {
                    "title": "Moderna Announces Phase 2 Data on mRNA-4157/V940, an Investigational mRNA Personalized Cancer Vaccine, to be Presented at the 2023 AACR Annual Meeting",
                    "source": "https://finance.yahoo.com/news/moderna-announces-phase-2-data-214000962.html"
                },
                {
                    "title": "Is It Time to Buy the Nasdaq's 3 Worst-Performing February Stocks?",
                    "source": "https://finance.yahoo.com/m/38c5b3e6-1caa-3d29-a3f3-d061a16e5896/is-it-time-to-buy-the.html"
                },
                {
                    "title": "Moderna, Inc.'s (NASDAQ:MRNA) Fundamentals Look Pretty Strong: Could The Market Be Wrong About The Stock?",
                    "source": "https://finance.yahoo.com/news/moderna-inc-nasdaq-mrna-fundamentals-110046989.html"
                },
                {
                    "title": "A Bull Market Is Coming: 5 Top Stocks to Buy Now",
                    "source": "https://finance.yahoo.com/m/1a3f592e-d492-3ee1-b105-ab86417b0868/a-bull-market-is-coming%3A-5.html"
                }
            ]
        },
        {
            "ticker": "MRVL",
            "news_items": [
                {
                    "title": "Marvell Technology, Inc. Declares Quarterly Dividend Payment",
                    "source": "https://finance.yahoo.com/news/marvell-technology-inc-declares-quarterly-200500002.html"
                },
                {
                    "title": "Semiconductor Stocks Climb Yet Inventories Bedevil Chip Industry; A Reality Check May Be Coming",
                    "source": "https://finance.yahoo.com/m/483c54ea-20c2-3a67-aa70-b6bee8eda642/semiconductor-stocks-climb.html"
                },
                {
                    "title": "Chart of the Day: There's Nothing Marvelous About This Stock",
                    "source": "https://finance.yahoo.com/m/9f7b12f6-920e-3211-b147-ee854cdf1f7c/chart-of-the-day%3A-there%27s.html"
                },
                {
                    "title": "Media Alert: Marvell to Present Evolution of Cloud Data Center Connectivity at Webinar Hosted by BofA Securities",
                    "source": "https://finance.yahoo.com/news/media-alert-marvell-present-evolution-130000142.html"
                },
                {
                    "title": "As We Exit One Stock, We're Adding to 2 Others",
                    "source": "https://finance.yahoo.com/m/1a3e852c-557c-3827-b210-da97027eabce/as-we-exit-one-stock%2C-we%27re.html"
                },
                {
                    "title": "Will Marvell Technology Survive and Thrive After the Chip Downturn?",
                    "source": "https://finance.yahoo.com/m/118da81e-1bd1-34b0-bcb5-25fe8bbd083b/will-marvell-technology.html"
                },
                {
                    "title": "Weekly Roundup",
                    "source": "https://finance.yahoo.com/m/d63210ba-77d7-376f-bef6-6229588e1dab/weekly-roundup.html"
                },
                {
                    "title": "The Chip Downturn Finally Comes for Marvell Technology: Is the Stock Still a Buy?",
                    "source": "https://finance.yahoo.com/m/fb2d6e02-b1bc-3242-b8bb-7c0cac98f46a/the-chip-downturn-finally.html"
                },
                {
                    "title": "Analyst Report: Marvell Technology Inc",
                    "source": "https://finance.yahoo.com/m/623bc5d1-e1c5-3cc0-9570-e69c2231bf66/analyst-report%3A-marvell.html"
                },
                {
                    "title": "Marvell Technology, Inc. (NASDAQ:MRVL) Q4 2023 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/marvell-technology-inc-nasdaq-mrvl-150031233.html"
                }
            ]
        },
        {
            "ticker": "MSFT",
            "news_items": [
                {
                    "title": "Introducing Microsoft 365 Copilot: your copilot for work",
                    "source": "https://finance.yahoo.com/news/introducing-microsoft-365-copilot-copilot-031100401.html"
                },
                {
                    "title": "Stock Market Rallies As 11 Bank Giants Aid First Republic, But FRC Dives Late; Apple, Microsoft Flash Buy Signals",
                    "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rallies-as-11.html"
                },
                {
                    "title": "Microsoft Adds the Tech Behind ChatGPT to Its Business Software",
                    "source": "https://finance.yahoo.com/m/d7247553-3c37-3bdb-94cf-62db7c0445a1/microsoft-adds-the-tech.html"
                },
                {
                    "title": "Ukraine Latest: Poland to Send Soviet-Era Jets; US Drone Video",
                    "source": "https://finance.yahoo.com/news/ukraine-latest-eu-broaden-efforts-090307605.html"
                },
                {
                    "title": "Microsoft adds AI tools to Office apps like Outlook, Word, Excel",
                    "source": "https://finance.yahoo.com/m/57ec78f6-777a-36c2-876f-f720a103bddc/microsoft-adds-ai-tools-to.html"
                },
                {
                    "title": "3 Big Tech Stocks are Holding Up the Entire Market",
                    "source": "https://finance.yahoo.com/news/3-big-tech-stocks-holding-223010663.html"
                },
                {
                    "title": "Stock Market Rebounds As 11 Bank Giants Aid First Republic; Apple, Microsoft Flash Buy Signals",
                    "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rebounds-as-11.html"
                },
                {
                    "title": "Microsofts AI integration puts users in drivers seat while bot manages routine tasks: Exec",
                    "source": "https://finance.yahoo.com/video/microsoft-ai-integration-puts-users-211214214.html"
                },
                {
                    "title": "Why Alphabet Stock Climbed Today",
                    "source": "https://finance.yahoo.com/m/2c18c91e-b2e5-37f1-8f80-9ecdd104014f/why-alphabet-stock-climbed.html"
                },
                {
                    "title": "Why Microsoft, Advanced Micro Devices, and Qualcomm Were Surging Today",
                    "source": "https://finance.yahoo.com/m/d51d8ee8-f58b-3041-bbe5-202ce0d8033b/why-microsoft%2C-advanced-micro.html"
                }
            ]
        },
        {
            "ticker": "MU",
            "news_items": [
                {
                    "title": "A $100 Billion Bet on Semiconductors Hinges on Remaking Upstate New Yorks Workforce",
                    "source": "https://finance.yahoo.com/m/7a06af4b-9bc7-3e6c-b9c4-5ef2b828e3b5/a-%24100-billion-bet-on.html"
                },
                {
                    "title": "Semiconductor Stocks Climb Yet Inventories Bedevil Chip Industry; A Reality Check May Be Coming",
                    "source": "https://finance.yahoo.com/m/483c54ea-20c2-3a67-aa70-b6bee8eda642/semiconductor-stocks-climb.html"
                },
                {
                    "title": "Wall Street Bulls Look Optimistic About Micron (MU): Should You Buy?",
                    "source": "https://finance.yahoo.com/news/wall-street-bulls-look-optimistic-133001124.html"
                },
                {
                    "title": "15 Best Artificial Intelligence (AI) Stocks To Buy According to Analysts",
                    "source": "https://finance.yahoo.com/news/15-best-artificial-intelligence-ai-151432463.html"
                },
                {
                    "title": "Micron Releases We Are Micron 2022 Diversity, Equality and Inclusion Report",
                    "source": "https://finance.yahoo.com/news/micron-releases-micron-2022-diversity-130000132.html"
                },
                {
                    "title": "Declining Stock and Decent Financials: Is The Market Wrong About Micron Technology, Inc. (NASDAQ:MU)?",
                    "source": "https://finance.yahoo.com/news/declining-stock-decent-financials-market-134503106.html"
                },
                {
                    "title": "2 Stocks to Buy Hand Over Fist Before the Nasdaq Jumps Higher",
                    "source": "https://finance.yahoo.com/m/4c156a38-3547-3e8a-8390-1409746525a0/2-stocks-to-buy-hand-over.html"
                },
                {
                    "title": "Micron Technology, Inc. (MU) Is a Trending Stock: Facts to Know Before Betting on It",
                    "source": "https://finance.yahoo.com/news/micron-technology-inc-mu-trending-140002417.html"
                },
                {
                    "title": "Micron (MU) Outpaces Stock Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/micron-mu-outpaces-stock-market-224510000.html"
                },
                {
                    "title": "Big Fund Slashes Stakes in Chip Stocks AMD, Intel, Nvidia, and Micron",
                    "source": "https://finance.yahoo.com/m/89416c9d-5dbe-359a-993f-4acc6cc2e20c/big-fund-slashes-stakes-in.html"
                }
            ]
        },
        {
            "ticker": "NFLX",
            "news_items": [
                {
                    "title": "SpaceX, Netflix, Boeing to join biggest - ever US business mission to Vietnam",
                    "source": "https://finance.yahoo.com/news/spacex-netflix-boeing-join-biggest-044046185.html"
                },
                {
                    "title": "YouTube TV Is Raising Prices. Here's What You Need to Know",
                    "source": "https://finance.yahoo.com/m/963a5bc7-0fa0-3ffb-8a0b-3df6d7c5ef8b/youtube-tv-is-raising-prices..html"
                },
                {
                    "title": "YouTube TV hikes prices to $72.99 a month, citing high content costs",
                    "source": "https://finance.yahoo.com/m/425367f1-13f4-3ec7-a5e0-98a37b1bb620/youtube-tv-hikes-prices-to.html"
                },
                {
                    "title": "Take-Two's (TTWO) Unit 2K Announces the Release of WWE 2K23",
                    "source": "https://finance.yahoo.com/news/twos-ttwo-unit-2k-announces-153703869.html"
                },
                {
                    "title": "What Meta Platforms and Netflix Investors Should Know About Recent Updates",
                    "source": "https://finance.yahoo.com/m/f5e99622-ba5a-3b86-99d9-3f9a8304fd15/what-meta-platforms-and.html"
                },
                {
                    "title": "Investors Heavily Search Netflix, Inc. (NFLX): Here is What You Need to Know",
                    "source": "https://finance.yahoo.com/news/investors-heavily-search-netflix-inc-130001843.html"
                },
                {
                    "title": "Wall Street is letting Netflix know how it feels about price cuts",
                    "source": "https://finance.yahoo.com/news/netflix-price-cuts-stock-wall-street-120039869.html"
                },
                {
                    "title": "6 big analyst picks: Stifel says FedEx stock is a buy | Pro Recap",
                    "source": "https://finance.yahoo.com/news/6-big-analyst-picks-stifel-071008993.html"
                },
                {
                    "title": "Netflix May Change Its Advertising Approach",
                    "source": "https://finance.yahoo.com/m/ab8ce7e8-299d-30b8-8b4b-c546704eefb0/netflix-may-change-its.html"
                },
                {
                    "title": "Netflix: Investors too pessimistic about paid account sharing, analyst says",
                    "source": "https://finance.yahoo.com/video/netflix-investors-too-pessimistic-paid-204758846.html"
                }
            ]
        },
        {
            "ticker": "NXPI",
            "news_items": [
                {
                    "title": "20 Most Valuable European Tech Companies In The World",
                    "source": "https://finance.yahoo.com/news/20-most-valuable-european-tech-221145055.html"
                },
                {
                    "title": "Option Trade On This Semiconductor Stock Can Make Money As It Goes Sideways",
                    "source": "https://finance.yahoo.com/m/92702c21-fdb8-3d57-87c9-361de90ebe23/option-trade-on-this.html"
                },
                {
                    "title": "Option Trade On Semiconductor Stock Can Profit From Sideways Motion",
                    "source": "https://finance.yahoo.com/m/92702c21-fdb8-3d57-87c9-361de90ebe23/option-trade-on-semiconductor.html"
                },
                {
                    "title": "NXP Semiconductors N.V. (NASDAQ:NXPI) Looks Interesting, And It's About To Pay A Dividend",
                    "source": "https://finance.yahoo.com/news/nxp-semiconductors-n-v-nasdaq-103446039.html"
                },
                {
                    "title": "NXP Stock May Be Setting Up For Breakout; Profits Sizzle",
                    "source": "https://finance.yahoo.com/m/0b295a51-18a9-3335-b24f-6a867ec5cebe/nxp-stock-may-be-setting-up.html"
                },
                {
                    "title": "NXP (NXPI) Down 3.2% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/nxp-nxpi-down-3-2-163004931.html"
                },
                {
                    "title": "Qnovo and NXP Collaborate to Accelerate Electric Vehicle Battery Performance, Range, and Safety",
                    "source": "https://finance.yahoo.com/news/qnovo-nxp-collaborate-accelerate-electric-120000309.html"
                },
                {
                    "title": "There's Been No Shortage Of Growth Recently For NXP Semiconductors' (NASDAQ:NXPI) Returns On Capital",
                    "source": "https://finance.yahoo.com/news/theres-no-shortage-growth-recently-170549935.html"
                },
                {
                    "title": "12 High Growth Semiconductor Stocks that are Profitable",
                    "source": "https://finance.yahoo.com/news/12-high-growth-semiconductor-stocks-115304413.html"
                },
                {
                    "title": "Strong Start, but Challenges Persist",
                    "source": "https://finance.yahoo.com/m/e68dbe5c-cc4a-3af6-8be6-59e1408d7b3a/strong-start%2C-but-challenges.html"
                }
            ]
        },
        {
            "ticker": "ODFL",
            "news_items": [
                {
                    "title": "6 Reasons Why You Should Buy Old Dominion (ODFL) Stock Now",
                    "source": "https://finance.yahoo.com/news/6-reasons-why-buy-old-155103173.html"
                },
                {
                    "title": "IBD Stock Of The Day ODFL: Trucker Old Dominion Geared Up To Lead Soft-Landing Rally",
                    "source": "https://finance.yahoo.com/m/e2cf2358-1768-3a1f-b49d-96cdb8898dc4/ibd-stock-of-the-day-odfl%3A.html"
                },
                {
                    "title": "Old Dominion (ODFL) Posts Weak February LTL Unit Performance",
                    "source": "https://finance.yahoo.com/news/old-dominion-odfl-posts-weak-152003803.html"
                },
                {
                    "title": "10 Biggest Trucking Companies",
                    "source": "https://finance.yahoo.com/m/e6d05ab4-5586-3ff9-b189-4109adf3f622/10-biggest-trucking-companies.html"
                },
                {
                    "title": "More evidence the U.S. economy is slowing, from trucking giant Old Dominion",
                    "source": "https://finance.yahoo.com/m/76b393ee-c99a-313e-a22d-59d6e7c09c5b/more-evidence-the-u.s..html"
                },
                {
                    "title": "Old Dominion Freight Line Provides Update for First Quarter 2023",
                    "source": "https://finance.yahoo.com/news/old-dominion-freight-line-provides-120000505.html"
                },
                {
                    "title": "Old Dominion Freight Line Announces Planned Executive Leadership Team Transitions",
                    "source": "https://finance.yahoo.com/news/old-dominion-freight-line-announces-210500497.html"
                },
                {
                    "title": "Are You Looking for a Top Momentum Pick? Why Old Dominion Freight Line (ODFL) is a Great Choice",
                    "source": "https://finance.yahoo.com/news/looking-top-momentum-pick-why-170005114.html"
                },
                {
                    "title": "2 Unstoppable Dividend Growth Stocks I Can't Wait to Buy",
                    "source": "https://finance.yahoo.com/m/f19dc400-c726-37c9-a8a3-ae74517a6d19/2-unstoppable-dividend-growth.html"
                },
                {
                    "title": "When Should You Buy Old Dominion Freight Line, Inc. (NASDAQ:ODFL)?",
                    "source": "https://finance.yahoo.com/news/buy-old-dominion-freight-line-112631997.html"
                }
            ]
        },
        {
            "ticker": "ORLY",
            "news_items": [
                {
                    "title": "Are You a Growth Investor? This 1 Stock Could Be the Perfect Pick",
                    "source": "https://finance.yahoo.com/news/growth-investor-1-stock-could-134501078.html"
                },
                {
                    "title": "Investors in O'Reilly Automotive (NASDAQ:ORLY) have made a stellar return of 236% over the past five years",
                    "source": "https://finance.yahoo.com/news/investors-oreilly-automotive-nasdaq-orly-153650143.html"
                },
                {
                    "title": "What Has Been 'Genuinely' Reliable Since President Truman In 1948?",
                    "source": "https://finance.yahoo.com/m/4a7ecfc8-4213-3d94-a16b-4c59ddb12700/what-has-been-%27genuinely%27.html"
                },
                {
                    "title": "OReilly Automotive, Inc. Celebrates the Opening of Its  6,000th Store",
                    "source": "https://finance.yahoo.com/news/o-reilly-automotive-inc-celebrates-213000318.html"
                },
                {
                    "title": "Stock Split Watch: Is O'Reilly Automotive Next?",
                    "source": "https://finance.yahoo.com/m/e2636b11-6db6-387f-b3cb-66f6bd278c25/stock-split-watch%3A-is.html"
                },
                {
                    "title": "The Zacks Analyst Blog Highlights Toyota, Honda BorgWarner, O'Reilly Automotive and Cummins",
                    "source": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-toyota-140002382.html"
                },
                {
                    "title": "OReilly Automotive, Inc. (NASDAQ:ORLY) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/o-reilly-automotive-inc-nasdaq-122015255.html"
                },
                {
                    "title": "Analyst Report: O'Reilly Automotive, Inc.",
                    "source": "https://finance.yahoo.com/m/59a50a9a-d575-35ef-814a-897f2d78f32b/analyst-report%3A-o%27reilly.html"
                },
                {
                    "title": "O'Reilly Automotive (ORLY) Tops Q4 Earnings and Revenue Estimates",
                    "source": "https://finance.yahoo.com/news/oreilly-automotive-orly-tops-q4-225510389.html"
                },
                {
                    "title": "OReilly Automotive, Inc. Reports Fourth Quarter andu00a0Full-Year 2022 Results",
                    "source": "https://finance.yahoo.com/news/o-reilly-automotive-inc-reports-213000943.html"
                }
            ]
        },
        {
            "ticker": "PANW",
            "news_items": [
                {
                    "title": "Is It Worth Investing in Palo Alto (PANW) Based on Wall Street's Bullish Views?",
                    "source": "https://finance.yahoo.com/news/worth-investing-palo-alto-panw-133001668.html"
                },
                {
                    "title": "Palo Alto Networks Leads the Industry to AI-Powered SASE",
                    "source": "https://finance.yahoo.com/news/palo-alto-networks-leads-industry-121500905.html"
                },
                {
                    "title": "Best Growth Stocks to Buy for March 15th",
                    "source": "https://finance.yahoo.com/news/best-growth-stocks-buy-march-095209787.html"
                },
                {
                    "title": "Dow Jones Rallies 400 Points After Key Inflation Report; First Republic Rebounds 62% As Bank Fears Ease",
                    "source": "https://finance.yahoo.com/m/4e1c87dc-eae5-30d7-9b95-e53aa5ddef1a/dow-jones-rallies-400-points.html"
                },
                {
                    "title": "Dow Jones Rallies 350 Points After Key Inflation Report; First Republic Rebounds 62% As Bank Fears Ease",
                    "source": "https://finance.yahoo.com/m/4e1c87dc-eae5-30d7-9b95-e53aa5ddef1a/dow-jones-rallies-350-points.html"
                },
                {
                    "title": "Dow Jones Rallies 300 Points After Key Inflation Report; First Republic Rebounds 62% As Bank Fears Ease",
                    "source": "https://finance.yahoo.com/m/4e1c87dc-eae5-30d7-9b95-e53aa5ddef1a/dow-jones-rallies-300-points.html"
                },
                {
                    "title": "Dow Jones Futures Rally After Key Inflation Report; First Republic Rebounds 60% As Bank Fears Ease",
                    "source": "https://finance.yahoo.com/m/4e1c87dc-eae5-30d7-9b95-e53aa5ddef1a/dow-jones-futures-rally-after.html"
                },
                {
                    "title": "Dow Jones Futures Higher After Key Inflation Report; First Republic Rebounds 60% As Bank Fears Ease",
                    "source": "https://finance.yahoo.com/m/4e1c87dc-eae5-30d7-9b95-e53aa5ddef1a/dow-jones-futures-higher.html"
                },
                {
                    "title": "If You Invested $1000 in Palo Alto Networks a Decade Ago, This is How Much It'd Be Worth Now",
                    "source": "https://finance.yahoo.com/news/invested-1000-palo-alto-networks-123012081.html"
                },
                {
                    "title": "Dow Jones Futures Rise 250 Points Ahead Of Key Inflation Report; First Republic Rebounds 56% As Bank Fears Ease",
                    "source": "https://finance.yahoo.com/m/4e1c87dc-eae5-30d7-9b95-e53aa5ddef1a/dow-jones-futures-rise-250.html"
                }
            ]
        },
        {
            "ticker": "PAYX",
            "news_items": [
                {
                    "title": "Paychex, Inc. Schedules Third Quarter Fiscal 2023 Earnings Conference Call for March 29, 2023",
                    "source": "https://finance.yahoo.com/news/paychex-inc-schedules-third-quarter-180000032.html"
                },
                {
                    "title": "80% of new hires who receive poor onboarding plan to quitespecially if theyre remote workers",
                    "source": "https://finance.yahoo.com/news/80-hires-receive-poor-onboarding-123645510.html"
                },
                {
                    "title": "Paychex's (NASDAQ:PAYX) three-year total shareholder returns outpace the underlying earnings growth",
                    "source": "https://finance.yahoo.com/news/paychexs-nasdaq-payx-three-total-112947003.html"
                },
                {
                    "title": "Paychex Named One of The World's Most Ethical Companies by Ethisphere for the 15th Time",
                    "source": "https://finance.yahoo.com/news/paychex-named-one-worlds-most-123000389.html"
                },
                {
                    "title": "11 Best Debt Free Stocks to Buy",
                    "source": "https://finance.yahoo.com/news/11-best-debt-free-stocks-131550252.html"
                },
                {
                    "title": "30 Biggest SaaS Companies in the World in 2023",
                    "source": "https://finance.yahoo.com/news/30-biggest-saas-companies-world-164842565.html"
                },
                {
                    "title": "Small Business Job Growth Improved for the Second Consecutive Month While Wage Inflation Continues to Cool",
                    "source": "https://finance.yahoo.com/news/small-business-job-growth-improved-133000636.html"
                },
                {
                    "title": "Paychex Wins 2023 Stevie Award for ERTC Service",
                    "source": "https://finance.yahoo.com/news/paychex-wins-2023-stevie-award-173000524.html"
                },
                {
                    "title": "80% of Great Resigners Now Regret It. Here's How to Quit With Confidence",
                    "source": "https://finance.yahoo.com/m/7d1c579b-2884-3fe1-b79a-909a836fd9b5/80%25-of-great-resigners-now.html"
                },
                {
                    "title": "CGEMY or PAYX: Which Is the Better Value Stock Right Now?",
                    "source": "https://finance.yahoo.com/news/cgemy-payx-better-value-stock-164004733.html"
                }
            ]
        },
        {
            "ticker": "PCAR",
            "news_items": [
                {
                    "title": "3 Domestic Auto Stocks Well-Poised to Fend Off Industry Woes",
                    "source": "https://finance.yahoo.com/news/3-domestic-auto-stocks-well-132101635.html"
                },
                {
                    "title": "Paccar (PCAR) Dips More Than Broader Markets: What You Should Know",
                    "source": "https://finance.yahoo.com/news/paccar-pcar-dips-more-broader-221510715.html"
                },
                {
                    "title": "PACCAR Recognizes 10 PPM Quality Award Winners",
                    "source": "https://finance.yahoo.com/news/paccar-recognizes-10-ppm-quality-160000151.html"
                },
                {
                    "title": "Zacks Value Trader Highlights: Penske Automotive Group, United Rentals and PACCAR",
                    "source": "https://finance.yahoo.com/news/zacks-value-trader-highlights-penske-130501281.html"
                },
                {
                    "title": "Salesforce and Advanced Micro Devices have been highlighted as Zacks Bull and Bear of the Day",
                    "source": "https://finance.yahoo.com/news/salesforce-advanced-micro-devices-highlighted-133601975.html"
                },
                {
                    "title": "Is PACCAR (PCAR) Ready to Charge Into an Electric Future?",
                    "source": "https://finance.yahoo.com/news/paccar-pcar-ready-charge-electric-161504516.html"
                },
                {
                    "title": "Are You a Value Investor? This 1 Stock Could Be the Perfect Pick",
                    "source": "https://finance.yahoo.com/news/value-investor-1-stock-could-144002683.html"
                },
                {
                    "title": "Paccar (PCAR) Stock Moves -0.64%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/paccar-pcar-stock-moves-0-230011404.html"
                },
                {
                    "title": "13 Most Undervalued Industrial Stocks To Buy According To Hedge Funds",
                    "source": "https://finance.yahoo.com/news/13-most-undervalued-industrial-stocks-134120186.html"
                },
                {
                    "title": "Technical Assessment: Bullish in the Intermediate-Term",
                    "source": "https://finance.yahoo.com/m/ff3d251c-d445-30ae-b537-62e552f1dc5a/technical-assessment%3A-bullish.html"
                }
            ]
        },
        {
            "ticker": "PDD",
            "news_items": [
                {
                    "title": "Top 5 China Stocks To Buy And Watch Now",
                    "source": "https://finance.yahoo.com/m/10c9e207-b808-3447-aef7-06d866a57f09/top-5-china-stocks-to-buy-and.html"
                },
                {
                    "title": "Investors Reward PDD for Winning Crown in China Online Price War",
                    "source": "https://finance.yahoo.com/news/investors-reward-pdd-winning-crown-031413233.html"
                },
                {
                    "title": "Analyst Report: PDD Holdings Inc.",
                    "source": "https://finance.yahoo.com/m/c1091555-b52b-3f5b-82b6-812bada23c79/analyst-report%3A-pdd-holdings.html"
                },
                {
                    "title": "PDD Holdings to Report Fourth Quarter and Fiscal Year 2022 Unaudited Financial Results on March 20, 2023",
                    "source": "https://finance.yahoo.com/news/pdd-holdings-report-fourth-quarter-155000060.html"
                },
                {
                    "title": "PDD's Temu budget e-commerce app said to enter UK as it ramps up competition with Shein, TikTok in accelerated expansion",
                    "source": "https://finance.yahoo.com/news/pdds-temu-budget-e-commerce-093000976.html"
                },
                {
                    "title": "JD.com Is Down 60% From Its High. Time to Buy?",
                    "source": "https://finance.yahoo.com/m/47a0df5e-8d5c-33cf-aedd-158edd3645de/jd.com-is-down-60%25-from-its.html"
                },
                {
                    "title": "11 Top Growth Stocks Expecting Up To 166% Rise This Year",
                    "source": "https://finance.yahoo.com/m/af26d4a8-0657-34f0-aece-00f556b04f76/11-top-growth-stocks.html"
                },
                {
                    "title": "China's JD.com Beats Quarterly Sales, Earnings Targets Despite Covid Restraints",
                    "source": "https://finance.yahoo.com/m/6f8c27d4-3200-305d-a7a7-10d47621ac81/china%27s-jd.com-beats.html"
                },
                {
                    "title": "Dow Jones Futures: Tesla Among 7 Stocks Near Buy Points As Market Rally Revives",
                    "source": "https://finance.yahoo.com/m/87ac4ff2-4e18-37e7-82e4-04a4493d0692/dow-jones-futures%3A-tesla.html"
                },
                {
                    "title": "Dow Jones Futures: Market Rally Revives; Tesla Among 7 Stocks Near Buy Points",
                    "source": "https://finance.yahoo.com/m/87ac4ff2-4e18-37e7-82e4-04a4493d0692/dow-jones-futures%3A-market.html"
                }
            ]
        },
        {
            "ticker": "PEP",
            "news_items": [
                {
                    "title": "Why Is Coke (KO) Up 1.4% Since Last Earnings Report?",
                    "source": "https://finance.yahoo.com/news/why-coke-ko-1-4-153003960.html"
                },
                {
                    "title": "10 High-Growth Canadian Dividend Stocks to Invest In",
                    "source": "https://finance.yahoo.com/news/10-high-growth-canadian-dividend-221735204.html"
                },
                {
                    "title": "PepsiCo (PEP) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/pepsico-pep-gains-market-dips-214509978.html"
                },
                {
                    "title": "Taking a Look at the February Retail Sales Report",
                    "source": "https://finance.yahoo.com/m/bd96403e-f276-319f-9a22-3f07cc1630c4/taking-a-look-at-the-february.html"
                },
                {
                    "title": "Calculating The Fair Value Of PepsiCo, Inc. (NASDAQ:PEP)",
                    "source": "https://finance.yahoo.com/news/calculating-fair-value-pepsico-inc-130023608.html"
                },
                {
                    "title": "2 Top Dividend Stocks That Look Like Exceptional Buys",
                    "source": "https://finance.yahoo.com/m/b2621b97-6f00-364f-9d7a-76614e9a07bf/2-top-dividend-stocks-that.html"
                },
                {
                    "title": "JUJU WATKINS NAMED 2022-23 GATORADE NATIONAL GIRLS BASKETBALL PLAYER OF THE YEAR",
                    "source": "https://finance.yahoo.com/news/juju-watkins-named-2022-23-233300155.html"
                },
                {
                    "title": "15 Under-the-Radar High Dividend Stocks to Buy",
                    "source": "https://finance.yahoo.com/news/15-under-radar-high-dividend-173749752.html"
                },
                {
                    "title": "With 74% ownership of the shares, PepsiCo, Inc. (NASDAQ:PEP) is heavily dominated by institutional owners",
                    "source": "https://finance.yahoo.com/news/74-ownership-shares-pepsico-inc-130027430.html"
                },
                {
                    "title": "Weekly Roundup",
                    "source": "https://finance.yahoo.com/m/d63210ba-77d7-376f-bef6-6229588e1dab/weekly-roundup.html"
                }
            ]
        },
        {
            "ticker": "PYPL",
            "news_items": [
                {
                    "title": "Australian regulator accepts PayPal unit's undertaking for money laundering laws",
                    "source": "https://finance.yahoo.com/news/australian-regulator-accepts-paypal-units-010251088.html"
                },
                {
                    "title": "UPDATE 1-Australian regulator accepts PayPal unit's undertaking for money laundering laws",
                    "source": "https://finance.yahoo.com/news/1-australian-regulator-accepts-paypal-005814561.html"
                },
                {
                    "title": "Is This PayPal's Biggest Threat?",
                    "source": "https://finance.yahoo.com/m/71c9d6dc-84ab-3c18-a891-d13b0aac4c59/is-this-paypal%27s-biggest.html"
                },
                {
                    "title": "Bank sector stress may provide a bullish case for cryptocurrencies. Heres how",
                    "source": "https://finance.yahoo.com/m/1dc595c9-0020-3b9d-9925-ed196a75b398/bank-sector-stress-may.html"
                },
                {
                    "title": "Your Side Gig Cash Could Earn You 4% Interest  Heres How",
                    "source": "https://finance.yahoo.com/news/easy-way-earn-4-interest-163655998.html"
                },
                {
                    "title": "How the Banking Mess Applies to Fintech Giants PayPal and Block -- and How It Doesn't",
                    "source": "https://finance.yahoo.com/m/d990c607-b793-340b-8a46-765861f3f0bb/how-the-banking-mess-applies.html"
                },
                {
                    "title": "3 Stocks You Might Be Glad You Bought at These Prices",
                    "source": "https://finance.yahoo.com/m/8c272b90-fa30-3482-a74f-fbf077d861a5/3-stocks-you-might-be-glad.html"
                },
                {
                    "title": "Paypal (PYPL) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/paypal-pypl-gains-lags-market-214509576.html"
                },
                {
                    "title": "Meta cuts more jobs in latest tech layoffs",
                    "source": "https://finance.yahoo.com/m/0fba6cc2-3d87-3037-b547-f2d80a477d38/meta-cuts-more-jobs-in-latest.html"
                },
                {
                    "title": "7 Blockchain Stocks Destined to Disrupt Traditional Industries",
                    "source": "https://finance.yahoo.com/news/7-blockchain-stocks-destined-disrupt-214823478.html"
                }
            ]
        },
        {
            "ticker": "QCOM",
            "news_items": [
                {
                    "title": "The Worst Is Over For PC, Smartphone Chip Stocks, Analyst Says",
                    "source": "https://finance.yahoo.com/m/6b0a4cb4-906a-304c-9351-2b6b588768d5/the-worst-is-over-for-pc%2C.html"
                },
                {
                    "title": "Why Microsoft, Advanced Micro Devices, and Qualcomm Were Surging Today",
                    "source": "https://finance.yahoo.com/m/d51d8ee8-f58b-3041-bbe5-202ce0d8033b/why-microsoft%2C-advanced-micro.html"
                },
                {
                    "title": "How Qualcomm Is Attracting and Recruiting Diverse Talent",
                    "source": "https://finance.yahoo.com/news/qualcomm-attracting-recruiting-diverse-talent-141500914.html"
                },
                {
                    "title": "Why Taiwan Semiconductor, Qualcomm, and Skyworks Solutions Fell Today, but Then Recovered",
                    "source": "https://finance.yahoo.com/m/09d1bea6-72f1-3ae6-9486-3a668a0c1493/why-taiwan-semiconductor%2C.html"
                },
                {
                    "title": "Qualcomm's Commitments to Acting Responsibly",
                    "source": "https://finance.yahoo.com/news/qualcomms-commitments-acting-responsibly-144000202.html"
                },
                {
                    "title": "Qualcomm (QCOM) Outpaces Stock Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/qualcomm-qcom-outpaces-stock-market-214509456.html"
                },
                {
                    "title": "Qualcomm spars with EU antitrust regulators over Huawei, ZTE rebates",
                    "source": "https://finance.yahoo.com/news/qualcomm-spars-eu-antitrust-regulators-125425079.html"
                },
                {
                    "title": "Qualcomm spars with EU antitrust regulators over Huawei, ZTE rebates",
                    "source": "https://finance.yahoo.com/news/qualcomm-spars-eu-antitrust-regulators-125056533.html"
                },
                {
                    "title": "Analyst Report: QUALCOMM Incorporated",
                    "source": "https://finance.yahoo.com/m/17e877cd-03cf-3c7e-8803-7f8a1f0d25df/analyst-report%3A-qualcomm.html"
                },
                {
                    "title": "Banks Topple, Satellite Leader Gets Support",
                    "source": "https://finance.yahoo.com/m/eab7cee1-025e-33d6-8350-7c655830f340/banks-topple%2C-satellite.html"
                }
            ]
        },
        {
            "ticker": "REGN",
            "news_items": [
                {
                    "title": "Medicare Negotiation Undercuts Biotech Stocks Regeneron, Halozyme",
                    "source": "https://finance.yahoo.com/m/5327dbb3-fa6b-34f4-9488-b751063a2c6e/medicare-negotiation.html"
                },
                {
                    "title": "Medicare Negotiation Hammers Biotech Stocks Regeneron, Halozyme",
                    "source": "https://finance.yahoo.com/m/5327dbb3-fa6b-34f4-9488-b751063a2c6e/medicare-negotiation-hammers.html"
                },
                {
                    "title": "Regeneron (REGN) Dips More Than Broader Markets: What You Should Know",
                    "source": "https://finance.yahoo.com/news/regeneron-regn-dips-more-broader-221510337.html"
                },
                {
                    "title": "Students Win More Than $1.8 Million at 2023 Regeneron Science Talent Search for Remarkable Scientific Research on RNA Molecule Structure, Media Bias, and Diagnostics for Pediatric Heart Disease",
                    "source": "https://finance.yahoo.com/news/students-win-more-1-8-025600896.html"
                },
                {
                    "title": "Students Win More Than $1.8 Million at 2023 Regeneron Science Talent Search for Remarkable Scientific Research on RNA Molecule Structure, Media Bias, and Diagnostics for Pediatric Heart Disease",
                    "source": "https://finance.yahoo.com/news/students-win-more-1-8-013000558.html"
                },
                {
                    "title": "Declining Stock and Solid Fundamentals: Is The Market Wrong About Regeneron Pharmaceuticals, Inc. (NASDAQ:REGN)?",
                    "source": "https://finance.yahoo.com/news/declining-stock-solid-fundamentals-market-110028807.html"
                },
                {
                    "title": "Regeneron Borrows From Big Pharma Playbook to Keep Roche, Shorts at Bay",
                    "source": "https://finance.yahoo.com/m/ec4cd039-2974-33ee-a782-a9f9bf6abef4/regeneron-borrows-from-big.html"
                },
                {
                    "title": "Regeneron (REGN) Stock Moves -0.19%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/regeneron-regn-stock-moves-0-231511371.html"
                },
                {
                    "title": "2 Biotech Stocks You Can Buy and Hold for the Next Decade",
                    "source": "https://finance.yahoo.com/m/64abf182-b5bb-3279-ba9a-5ba1e30b0e7d/2-biotech-stocks-you-can-buy.html"
                },
                {
                    "title": "Sanofi (SNY), Regeneron Dupixent sBLA Accepted for FDA Review",
                    "source": "https://finance.yahoo.com/news/sanofi-sny-regeneron-dupixent-sbla-141002752.html"
                }
            ]
        },
        {
            "ticker": "RIVN",
            "news_items": [
                {
                    "title": "If You Invested $10,000 in Rivian Stock in 2021, This Is How Much You Would Have Today",
                    "source": "https://finance.yahoo.com/m/d610907c-11fb-3138-94ad-d35bd12b5b69/if-you-invested-%2410%2C000-in.html"
                },
                {
                    "title": "The Most Outrageous CEO Salaries and Perks",
                    "source": "https://finance.yahoo.com/news/most-outrageous-ceo-salaries-perks-150002741.html"
                },
                {
                    "title": "2 Green Flags for Tesla and EV Stocks Right Now",
                    "source": "https://finance.yahoo.com/m/d09c31b4-eb20-36f5-b7d5-a7845dd77847/2-green-flags-for-tesla-and.html"
                },
                {
                    "title": "Rivian Stock Is Really Just About Free. Investors Shouldnt Forget Cash.",
                    "source": "https://finance.yahoo.com/m/17342924-9b4d-33a8-b653-0ff390a12fc8/rivian-stock-is-really-just.html"
                },
                {
                    "title": "Near 52-Week Lows, 2 EV Stocks Worth Considering Now",
                    "source": "https://finance.yahoo.com/m/6dbb5fe6-b0b3-398e-a6a2-703479721889/near-52-week-lows%2C-2-ev.html"
                },
                {
                    "title": "Rivian Stock Really Costs 19 Cents. Investors Shouldnt Forget Cash.",
                    "source": "https://finance.yahoo.com/m/17342924-9b4d-33a8-b653-0ff390a12fc8/rivian-stock-really-costs-19.html"
                },
                {
                    "title": "The EV Revolution Has Its Share Of Obstacles, But It Isn't Slowing Down",
                    "source": "https://finance.yahoo.com/news/ev-revolution-share-obstacles-isnt-164018219.html"
                },
                {
                    "title": "Reddits 10 Meme Stocks Ranked From Best to Worst According to Hedge Funds",
                    "source": "https://finance.yahoo.com/news/reddit-10-meme-stocks-ranked-142024145.html"
                },
                {
                    "title": "EV Roundup: RIDE's Q4 Results, RIVN's $1.3B Green Bond Offering & More",
                    "source": "https://finance.yahoo.com/news/ev-roundup-rides-q4-results-141102735.html"
                },
                {
                    "title": "5 Things to Know Before Markets Open",
                    "source": "https://finance.yahoo.com/m/d7466f82-0c46-3191-b493-05050f9bacbe/5-things-to-know-before.html"
                }
            ]
        },
        {
            "ticker": "ROST",
            "news_items": [
                {
                    "title": "ROSS STORES OPENS 19 NEW LOCATIONS",
                    "source": "https://finance.yahoo.com/news/ross-stores-opens-19-locations-133000278.html"
                },
                {
                    "title": "Ross Stores, Inc. (NASDAQ:ROST) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/ross-stores-inc-nasdaq-rost-022120325.html"
                },
                {
                    "title": "Potbelly (PBPB) to Post Q4 Earnings: What's in the Offing?",
                    "source": "https://finance.yahoo.com/news/potbelly-pbpb-post-q4-earnings-161104063.html"
                },
                {
                    "title": "American Eagle (AEO) Q4 Earnings & Sales Beat, Stock Up",
                    "source": "https://finance.yahoo.com/news/american-eagle-aeo-q4-earnings-124312299.html"
                },
                {
                    "title": "Ross Stores (ROST) Tops on Q4 Earnings & Sales, Gives '23 View",
                    "source": "https://finance.yahoo.com/news/ross-stores-rost-tops-q4-153503028.html"
                },
                {
                    "title": "Kohl's (KSS) Stock Declines on Q4 Loss & Sluggish Revenues",
                    "source": "https://finance.yahoo.com/news/kohls-kss-stock-declines-q4-144502901.html"
                },
                {
                    "title": "Retail earnings: Lowes, Ross, Target warning us not expect too much from them, analyst says",
                    "source": "https://finance.yahoo.com/video/retail-earnings-lowe-ross-target-143356041.html"
                },
                {
                    "title": "Q4 2022 Ross Stores Inc Earnings Call",
                    "source": "https://finance.yahoo.com/news/q4-2022-ross-stores-inc-142548699.html"
                },
                {
                    "title": "Analyst Report: Ross Stores, Inc.",
                    "source": "https://finance.yahoo.com/m/f431b6de-9dc7-3761-bfb4-e6d8ef9da1df/analyst-report%3A-ross-stores%2C.html"
                },
                {
                    "title": "Ross Stores (ROST) Tops Q4 Earnings and Revenue Estimates",
                    "source": "https://finance.yahoo.com/news/ross-stores-rost-tops-q4-221510292.html"
                }
            ]
        },
        {
            "ticker": "SBUX",
            "news_items": [
                {
                    "title": "Starbucks (SBUX) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/starbucks-sbux-gains-lags-market-214509916.html"
                },
                {
                    "title": "Biden unveils EV charging plan; Will Tesla throw a wrench in it?",
                    "source": "https://finance.yahoo.com/news/biden-unveils-ev-charging-plan-will-tesla-throw-a-wrench-in-it-193802764.html"
                },
                {
                    "title": "26 Companies that Donate to Nonprofits",
                    "source": "https://finance.yahoo.com/news/26-companies-donate-nonprofits-170818162.html"
                },
                {
                    "title": "The Zacks Analyst Blog Highlights Union Pacific, Starbucks, Duke Energy, Copart and HP",
                    "source": "https://finance.yahoo.com/news/zacks-analyst-blog-highlights-union-130601512.html"
                },
                {
                    "title": "Joe & The Juice aspires to be the Starbucks of juice without losing the ride-or-die culture that sets it apart",
                    "source": "https://finance.yahoo.com/news/joe-juice-aspires-starbucks-juice-123000844.html"
                },
                {
                    "title": "Top Analyst Reports for Union Pacific, Starbucks & Duke Energy",
                    "source": "https://finance.yahoo.com/news/top-analyst-reports-union-pacific-195107820.html"
                },
                {
                    "title": "Noodles & Co. (NDLS) Moves 5.6% Higher: Will This Strength Last?",
                    "source": "https://finance.yahoo.com/news/noodles-co-ndls-moves-5-120912109.html"
                },
                {
                    "title": "Better Buy: Dutch Bros vs. Starbucks",
                    "source": "https://finance.yahoo.com/m/164e5fca-91ac-37c0-88fe-c4f872d427ff/better-buy%3A-dutch-bros-vs..html"
                },
                {
                    "title": "Starbucks, DoorDash Ink Delivery Partnership In Canada",
                    "source": "https://finance.yahoo.com/news/starbucks-doordash-ink-delivery-partnership-172623480.html"
                },
                {
                    "title": "Starbucks (SBUX) Stock Up 25% in a Year: More Room to Run?",
                    "source": "https://finance.yahoo.com/news/starbucks-sbux-stock-25-more-164304884.html"
                }
            ]
        },
        {
            "ticker": "SGEN",
            "news_items": [
                {
                    "title": "Medicare identifies drug makers that will owe penalties for raising prices on 27 drugs faster than rate of inflation",
                    "source": "https://finance.yahoo.com/news/medicare-identifies-drug-makers-that-will-owe-penalties-for-raising-prices-on-27-drugs-faster-than-rate-of-inflation-193858208.html"
                },
                {
                    "title": "Seagen to Present New Clinical and Preclinical Data From Broad Portfolio of Targeted Cancer Therapeutics at the 2023 AACR Annual Meeting",
                    "source": "https://finance.yahoo.com/news/seagen-present-clinical-preclinical-data-203000157.html"
                },
                {
                    "title": "Strength Seen in Seattle Genetics (SGEN): Can Its 14.5% Jump Turn into More Strength?",
                    "source": "https://finance.yahoo.com/news/strength-seen-seattle-genetics-sgen-085308842.html"
                },
                {
                    "title": "Analyst Report: Seagen Inc.",
                    "source": "https://finance.yahoo.com/m/34282b69-ba8c-3086-8081-5eaf4ce6fbf2/analyst-report%3A-seagen-inc..html"
                },
                {
                    "title": "Corrections & Amplifications",
                    "source": "https://finance.yahoo.com/m/17f6b947-f90b-30d6-aee8-4173384b36d0/corrections-%26-amplifications.html"
                },
                {
                    "title": "Pfizer Agrees to Buy Seagen for $43 Billion",
                    "source": "https://finance.yahoo.com/m/57d29b00-b8d9-3896-985d-e7ffeba98e58/pfizer-agrees-to-buy-seagen.html"
                },
                {
                    "title": "Pfizer Overpays for Seagen, but Whos Counting",
                    "source": "https://finance.yahoo.com/m/99c1c43d-8401-34fc-853c-9094732a595e/pfizer-overpays-for-seagen%2C.html"
                },
                {
                    "title": "Pfizer to battle cancer with Seagen merger, CEO  Albert Bourla says",
                    "source": "https://finance.yahoo.com/video/pfizer-battle-cancer-seagen-merger-160612573.html"
                },
                {
                    "title": "Pfizer aiming to acquire Seagen in $43 billion deal",
                    "source": "https://finance.yahoo.com/video/pfizer-aiming-acquire-seagen-43-141956541.html"
                },
                {
                    "title": "Pfizer Invests $43 Billion to Battle Cancer",
                    "source": "https://finance.yahoo.com/news/pfizer-invests-43-billion-battle-104500349.html"
                }
            ]
        },
        {
            "ticker": "SIRI",
            "news_items": [
                {
                    "title": "Is It Time to Buy the Nasdaq's 3 Worst-Performing February Stocks?",
                    "source": "https://finance.yahoo.com/m/38c5b3e6-1caa-3d29-a3f3-d061a16e5896/is-it-time-to-buy-the.html"
                },
                {
                    "title": "Has Warren Buffett Lost His Touch? 2 Berkshire Stocks to Sell Now",
                    "source": "https://finance.yahoo.com/m/e25db969-062e-39bc-a628-8584975c5ed5/has-warren-buffett-lost-his.html"
                },
                {
                    "title": "U.S. Jobless Claims Jump but Remain Historically Low",
                    "source": "https://finance.yahoo.com/m/400566c6-ee8d-37e7-af54-18b59f96002c/u.s.-jobless-claims-jump-but.html"
                },
                {
                    "title": "U.S. Jobless Claims Jumped More Than 10% Last Week",
                    "source": "https://finance.yahoo.com/m/400566c6-ee8d-37e7-af54-18b59f96002c/u.s.-jobless-claims-jumped.html"
                },
                {
                    "title": "7 Stocks at 52-Week Lows and Highly Attractive From Here",
                    "source": "https://finance.yahoo.com/news/7-stocks-52-week-lows-210524495.html"
                },
                {
                    "title": "Sirius XM (SIRI) to Broadcast 2023 NTT INDYCAR SERIES Season",
                    "source": "https://finance.yahoo.com/news/sirius-xm-siri-broadcast-2023-155503245.html"
                },
                {
                    "title": "Sirius XM Lays Off 475 Employees On Completing Strategic Review",
                    "source": "https://finance.yahoo.com/news/sirius-xm-lays-off-475-154823797.html"
                },
                {
                    "title": "Sirius XM Slashes Jobs in a Reorganization",
                    "source": "https://finance.yahoo.com/m/809ee5bd-2915-3c41-ad31-bf3adfed397d/sirius-xm-slashes-jobs-in-a.html"
                },
                {
                    "title": "Markets Little Changed Ahead of Powell Testimony",
                    "source": "https://finance.yahoo.com/m/ee0b8de6-d94d-3d1c-b0bf-5eae71a7c24b/markets-little-changed-ahead.html"
                },
                {
                    "title": "Sirius XM Is Cutting Staff by 8% Amid Slowing Growth",
                    "source": "https://finance.yahoo.com/m/d763bc7a-231c-3335-9104-d26818006fd5/sirius-xm-is-cutting-staff-by.html"
                }
            ]
        },
        {
            "ticker": "SNPS",
            "news_items": [
                {
                    "title": "25 Largest Software Companies in the World by Revenue",
                    "source": "https://finance.yahoo.com/news/25-largest-software-companies-world-204009158.html"
                },
                {
                    "title": "5 big stock buybacks: Goldman to repurchase $30B; Baidu, $5B | Pro Recap",
                    "source": "https://finance.yahoo.com/news/5-big-stock-buybacks-goldman-063804604.html"
                },
                {
                    "title": "Synopsys - A Future-Focused Value Stock",
                    "source": "https://finance.yahoo.com/news/synopsys-future-focused-value-stock-165602619.html"
                },
                {
                    "title": "Synopsys Initiates $300 Million Accelerated Share Repurchase Agreement",
                    "source": "https://finance.yahoo.com/news/synopsys-initiates-300-million-accelerated-140000082.html"
                },
                {
                    "title": "Synopsys to Present at Upcoming Investor Events",
                    "source": "https://finance.yahoo.com/news/synopsys-present-upcoming-investor-events-210500668.html"
                },
                {
                    "title": "Synopsys Study Underscores Need for Comprehensive SBOM as Best Defense in Software Supply Chain Security",
                    "source": "https://finance.yahoo.com/news/synopsys-study-underscores-comprehensive-sbom-140500958.html"
                },
                {
                    "title": "This AI Stock Fell After Doubling Down on Its 2023 Growth Outlook; Time to Buy?",
                    "source": "https://finance.yahoo.com/m/e1904c4a-31a9-32e9-8593-cfe8b412acdd/this-ai-stock-fell-after.html"
                },
                {
                    "title": "Synopsys, Inc. (NASDAQ:SNPS) Q1 2023 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/synopsys-inc-nasdaq-snps-q1-234924517.html"
                },
                {
                    "title": "Synopsys Stock Falls On Weak Guidance After Mixed Quarterly Report",
                    "source": "https://finance.yahoo.com/m/b4ce98f6-b2e3-363b-bd77-fb1b27ab0946/synopsys-stock-falls-on-weak.html"
                },
                {
                    "title": "Synopsys (SNPS) Beats Q1 Earnings and Sales Estimates",
                    "source": "https://finance.yahoo.com/news/synopsys-snps-beats-q1-earnings-133101255.html"
                }
            ]
        },
        {
            "ticker": "TEAM",
            "news_items": [
                {
                    "title": "14 Best Falling Stocks To Buy Now",
                    "source": "https://finance.yahoo.com/news/14-best-falling-stocks-buy-032714753.html"
                },
                {
                    "title": "2 Tech Stocks That May Be Overvalued",
                    "source": "https://finance.yahoo.com/m/ce77b97d-7ae3-3672-b849-22540838328b/2-tech-stocks-that-may-be.html"
                },
                {
                    "title": "Is It Too Late to Buy Asana Stock?",
                    "source": "https://finance.yahoo.com/m/af47433b-c109-3297-b269-ec7cf9a71819/is-it-too-late-to-buy-asana.html"
                },
                {
                    "title": "Analyst Report: Atlassian Corporation",
                    "source": "https://finance.yahoo.com/m/c0f50ad9-5ce3-30b3-89ec-a09c45c3020e/analyst-report%3A-atlassian.html"
                },
                {
                    "title": "2 Nasdaq Stocks You'll Want to Buy on the Dip in March",
                    "source": "https://finance.yahoo.com/m/473e7515-1587-37d0-924f-e146a62d406f/2-nasdaq-stocks-you%27ll-want.html"
                },
                {
                    "title": "Model N (MODN) Down 8.4% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/model-n-modn-down-8-163004651.html"
                },
                {
                    "title": "The five-year returns have been solid for Atlassian (NASDAQ:TEAM) shareholders despite underlying losses increasing",
                    "source": "https://finance.yahoo.com/news/five-returns-solid-atlassian-nasdaq-140014026.html"
                },
                {
                    "title": "Atlassian Lets Go Of 500 Full-Time Workers Under Latest Restructuring Program",
                    "source": "https://finance.yahoo.com/news/atlassian-lets-500-full-time-153512100.html"
                },
                {
                    "title": "These Stocks Are Moving the Most Today: Meta, Rivian, Squarespace, Dicks, and More",
                    "source": "https://finance.yahoo.com/m/9c5ed4c0-00f7-3451-9c38-0d4598d56e9d/these-stocks-are-moving-the.html"
                },
                {
                    "title": "Atlassian plans to lay off 5% of workers",
                    "source": "https://finance.yahoo.com/m/3e8b3665-cae8-36a5-8f35-d4ad99f6ac48/atlassian-plans-to-lay-off-5%25.html"
                }
            ]
        },
        {
            "ticker": "TMUS",
            "news_items": [
                {
                    "title": "T-Mobile Analyst Reacts Positively To Ka'ena Acquisition And Other Positive Catalysts",
                    "source": "https://finance.yahoo.com/news/t-mobile-analyst-reacts-positively-183212947.html"
                },
                {
                    "title": "Ryan Reynolds Sells Mint Mobile for $1.35 Billion to T-Mobile",
                    "source": "https://finance.yahoo.com/m/68601dbf-20c6-3e61-8193-c025324f8705/ryan-reynolds-sells-mint.html"
                },
                {
                    "title": "T-Mobile Snags Ryan Reynolds' Marketing Genius With $1.35 Billion Mint Mobile Buyout",
                    "source": "https://finance.yahoo.com/m/00f26e9b-92ac-3ab0-9420-a460ff8e4981/t-mobile-snags-ryan-reynolds%27.html"
                },
                {
                    "title": "T-Mobile (TMUS) Acquires Mint Mobile to Expand Customer Base",
                    "source": "https://finance.yahoo.com/news/t-mobile-tmus-acquires-mint-130201110.html"
                },
                {
                    "title": "25 New Towns Selected to Receive T-Mobile Hometown Grants for Local Initiatives",
                    "source": "https://finance.yahoo.com/news/25-towns-selected-receive-t-130000350.html"
                },
                {
                    "title": "Walmart and 3 Other Stocks to Buy in a Recession From Citis Top Ideas List",
                    "source": "https://finance.yahoo.com/m/27a0c8ee-7389-39e0-ba14-b240457094e2/walmart-and-3-other-stocks-to.html"
                },
                {
                    "title": "Ryan Reynolds-Backed Mint Is Bought by T-Mobile for $1.35 Billion",
                    "source": "https://finance.yahoo.com/news/ryan-reynolds-backed-mint-bought-211259497.html"
                },
                {
                    "title": "T-Mobile to acquire Ryan Reynolds Mint Mobile for $1.35 billion",
                    "source": "https://finance.yahoo.com/video/t-mobile-acquire-ryan-reynolds-200113506.html"
                },
                {
                    "title": "T-Mobile to Buy Ryan Reynolds-Backed Mint Mobile in $1.35 Billion Deal",
                    "source": "https://finance.yahoo.com/m/b1ff9b0a-9477-3a8e-abf3-db926cd78060/t-mobile-to-buy-ryan.html"
                },
                {
                    "title": "Analyst Report: T-Mobile US, Inc.",
                    "source": "https://finance.yahoo.com/m/13d6191e-6100-39f2-b657-13df100b89e9/analyst-report%3A-t-mobile-us%2C.html"
                }
            ]
        },
        {
            "ticker": "TSLA",
            "news_items": [
                {
                    "title": "Tesla Stock Vs. BYD Stock: TSLA Holds Support As EV Price War Continues",
                    "source": "https://finance.yahoo.com/m/0d1679e9-5a19-30a3-bee5-1d78a0372faa/tesla-stock-vs.-byd-stock%3A.html"
                },
                {
                    "title": "XPeng Earnings Are Coming. The Stock Could Use Some Good News.",
                    "source": "https://finance.yahoo.com/m/658fd54c-d510-35c1-969b-76800b9e7309/xpeng-earnings-are-coming..html"
                },
                {
                    "title": "Elon Musk fumes over OpenAI becoming $30B market cap for-profit after his $100M donation",
                    "source": "https://finance.yahoo.com/news/elon-musk-fumes-over-openai-193232779.html"
                },
                {
                    "title": "Elon Musk Building Texas 'Utopia' for SpaceX and Boring Company Employees",
                    "source": "https://finance.yahoo.com/news/elon-musk-building-texas-utopia-180133293.html"
                },
                {
                    "title": "Elon Musks $25,000 car for the masses was just unveiledby Volkswagen",
                    "source": "https://finance.yahoo.com/news/elon-musk-25-000-car-173210596.html"
                },
                {
                    "title": "Elon Musk Frets As Microsoft Axes AI Ethics Team, Richard Branson's Virgin Orbit Stops Ops, Credit Suisse To Borrow Up To $54B: Today's Top Stories",
                    "source": "https://finance.yahoo.com/news/elon-musk-frets-microsoft-axes-162246064.html"
                },
                {
                    "title": "The Most Outrageous CEO Salaries and Perks",
                    "source": "https://finance.yahoo.com/news/most-outrageous-ceo-salaries-perks-150002741.html"
                },
                {
                    "title": "Elon Musk says he's 'open to the idea' of buying Silicon Valley Bank after its collapse  but is he really serious? Here are 3 other ways to bet alongside the billionaire",
                    "source": "https://finance.yahoo.com/news/elon-musk-just-said-hes-133500538.html"
                },
                {
                    "title": "Investors Reward PDD for Winning Crown in China Online Price War",
                    "source": "https://finance.yahoo.com/news/investors-reward-pdd-winning-crown-031413233.html"
                },
                {
                    "title": "The UN wants to reflect sunlight back into space in order to cool the earth  but some companies are harnessing it instead. Here are 3 high-flying solar stocks that Wall Street likes",
                    "source": "https://finance.yahoo.com/news/un-wants-reflect-sunlight-back-110000332.html"
                }
            ]
        },
        {
            "ticker": "TXN",
            "news_items": [
                {
                    "title": "Texas Instruments (TXN) Gains But Lags Market: What You Should Know",
                    "source": "https://finance.yahoo.com/news/texas-instruments-txn-gains-lags-215009317.html"
                },
                {
                    "title": "TI unlocks scalable edge AI performance in smart camera applications with new vision processor family",
                    "source": "https://finance.yahoo.com/news/ti-unlocks-scalable-edge-ai-130000305.html"
                },
                {
                    "title": "TI makes embedded systems more affordable with new Armu00ae Cortexu00ae-M0+ MCU portfolio",
                    "source": "https://finance.yahoo.com/news/ti-makes-embedded-systems-more-045900780.html"
                },
                {
                    "title": "Web of Secret Chip Deals Allegedly Help US Tech Flow to Russia",
                    "source": "https://finance.yahoo.com/news/secret-chip-deals-allegedly-help-040134984.html"
                },
                {
                    "title": "Texas Instruments' (NASDAQ:TXN) investors will be pleased with their decent 99% return over the last three years",
                    "source": "https://finance.yahoo.com/news/texas-instruments-nasdaq-txn-investors-110032059.html"
                },
                {
                    "title": "Texas Instruments (TXN) Stock Moves -1.04%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/texas-instruments-txn-stock-moves-224510647.html"
                },
                {
                    "title": "Dont Let Bad News Scare You Away From Dividend Stocks",
                    "source": "https://finance.yahoo.com/m/4a0a0414-3cf8-3006-b57e-5062d3d5a9e3/don%E2%80%99t-let-bad-news-scare-you.html"
                },
                {
                    "title": "Texas Instruments (TXN) Stock Moves -1.58%: What You Should Know",
                    "source": "https://finance.yahoo.com/news/texas-instruments-txn-stock-moves-225010473.html"
                },
                {
                    "title": "Texas Instruments Stock Earns Relative Strength Rating Upgrade",
                    "source": "https://finance.yahoo.com/m/466da2cf-2f03-3016-9711-691f19dd36b7/texas-instruments-stock-earns.html"
                },
                {
                    "title": "2 Dividend Stocks to Double Up On Right Now",
                    "source": "https://finance.yahoo.com/m/5de1cacc-fa55-3666-80ae-9efd8ea20b94/2-dividend-stocks-to-double.html"
                }
            ]
        },
        {
            "ticker": "VRSK",
            "news_items": [
                {
                    "title": "Verisk Marketing Solutions Launches Real - Time Decisions Product Suite",
                    "source": "https://finance.yahoo.com/news/verisk-marketing-solutions-launches-real-130000166.html"
                },
                {
                    "title": "Verisk Hosts Investor Day in Jersey City, New Jersey Today",
                    "source": "https://finance.yahoo.com/news/verisk-hosts-investor-day-jersey-113000385.html"
                },
                {
                    "title": "5 big stock buybacks: Verisk, Con Edison | Pro Recap",
                    "source": "https://finance.yahoo.com/news/5-big-stock-buybacks-verisk-053731914.html"
                },
                {
                    "title": "Verisk Analytics stock rallies toward 6-month high after $2.5 billion accelerated stock buyback program announced",
                    "source": "https://finance.yahoo.com/m/8f5069ac-3f20-3a47-ac3d-7292164d1e94/verisk-analytics-stock.html"
                },
                {
                    "title": "Verisk Analytics, Inc. Announces $2.5 Billion Accelerated Share Repurchase Transaction",
                    "source": "https://finance.yahoo.com/news/verisk-analytics-inc-announces-2-140000060.html"
                },
                {
                    "title": "5 Stocks That Powered Nasdaq ETF Last Week",
                    "source": "https://finance.yahoo.com/news/5-stocks-powered-nasdaq-etf-150503505.html"
                },
                {
                    "title": "Verisk Analytics, Inc. Prices Offering of Senior Notes",
                    "source": "https://finance.yahoo.com/news/verisk-analytics-inc-prices-offering-190000316.html"
                },
                {
                    "title": "Verisk Analytics, Inc. (NASDAQ:VRSK) Q4 2022 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/verisk-analytics-inc-nasdaq-vrsk-022143009.html"
                },
                {
                    "title": "Verisk to Host Investor Day on March 14, 2023 in Jersey City, New Jersey",
                    "source": "https://finance.yahoo.com/news/verisk-host-investor-day-march-140000705.html"
                },
                {
                    "title": "Verisk Analytics Full Year 2022 Earnings: Misses Expectations",
                    "source": "https://finance.yahoo.com/news/verisk-analytics-full-2022-earnings-102657773.html"
                }
            ]
        },
        {
            "ticker": "VRTX",
            "news_items": [
                {
                    "title": "Vertex Announces Publication in New England Journal of Medicine of Results from Phase 2 Study of Inaxaplin (VX-147)",
                    "source": "https://finance.yahoo.com/news/vertex-announces-publication-england-journal-120000445.html"
                },
                {
                    "title": "Vertex Pharmaceuticals Stock Gets Technical Rating Upgrade",
                    "source": "https://finance.yahoo.com/m/2fbad3f9-a377-3c8f-ba99-5927b321d1e2/vertex-pharmaceuticals-stock.html"
                },
                {
                    "title": "Prediction: These 3 Stocks Will Be in the Dow by 2030",
                    "source": "https://finance.yahoo.com/m/617dba01-475e-3991-a026-54d3a5d5e03f/prediction%3A-these-3-stocks.html"
                },
                {
                    "title": "3 Supercharged Stocks With More Potential Than Any Cryptocurrency",
                    "source": "https://finance.yahoo.com/m/87d02f8e-3a64-3adb-9e85-884946b1783e/3-supercharged-stocks-with.html"
                },
                {
                    "title": "Is Now The Time To Put Vertex Pharmaceuticals (NASDAQ:VRTX) On Your Watchlist?",
                    "source": "https://finance.yahoo.com/news/now-time-put-vertex-pharmaceuticals-140035315.html"
                },
                {
                    "title": "Vertex Pharmaceuticals (VRTX) Gains As Market Dips: What You Should Know",
                    "source": "https://finance.yahoo.com/news/vertex-pharmaceuticals-vrtx-gains-market-224510856.html"
                },
                {
                    "title": "Vertex (VRTX) to Begin Clinical Study on Type I Diabetes Drug",
                    "source": "https://finance.yahoo.com/news/vertex-vrtx-begin-clinical-study-142502333.html"
                },
                {
                    "title": "This HealthCare Company Is Gearing Up for Its Next Launch: Here Is Why The Stock Is a Buy",
                    "source": "https://finance.yahoo.com/m/f8b13e0c-36e3-32aa-9926-f1710f3a9438/this-healthcare-company-is.html"
                },
                {
                    "title": "If You Invested $10,000 in CRISPR Therapeutics In 2020, This Is How Much You Would Have Today",
                    "source": "https://finance.yahoo.com/m/0aef70a9-e3b6-30ff-811c-105797c249d9/if-you-invested-%2410%2C000-in.html"
                },
                {
                    "title": "Vertex (VRTX) Down 2.8% Since Last Earnings Report: Can It Rebound?",
                    "source": "https://finance.yahoo.com/news/vertex-vrtx-down-2-8-163004413.html"
                }
            ]
        },
        {
            "ticker": "WBA",
            "news_items": [
                {
                    "title": "Here's Why You Should Retain Walgreens Boots (WBA) For Now",
                    "source": "https://finance.yahoo.com/news/heres-why-retain-walgreens-boots-144502439.html"
                },
                {
                    "title": "2 Healthcare Dividend Stocks That Hit the Sweet Spot",
                    "source": "https://finance.yahoo.com/m/67c789f4-41b4-33f7-a46a-29fa869d9156/2-healthcare-dividend-stocks.html"
                },
                {
                    "title": "3 Exceptionally Safe Stocks That Can Turn $400,000 Into $1 Million by 2030",
                    "source": "https://finance.yahoo.com/m/fb9d7911-ea2f-37c7-b529-395113f999dc/3-exceptionally-safe-stocks.html"
                },
                {
                    "title": "20 Largest Retailers in the World",
                    "source": "https://finance.yahoo.com/news/20-largest-retailers-world-140856560.html"
                },
                {
                    "title": "Should You Buy the 3 Highest-Paying Dividend Stocks in the Dow Jones?",
                    "source": "https://finance.yahoo.com/m/9c380f8d-9f53-319b-9844-3a23bf4867ab/should-you-buy-the-3.html"
                },
                {
                    "title": "Walgreens Boots Alliance (WBA) Stock Sinks As Market Gains: What You Should Know",
                    "source": "https://finance.yahoo.com/news/walgreens-boots-alliance-wba-stock-214509988.html"
                },
                {
                    "title": "These 3 Dow Stocks Are the Cheapest They've Been in Over a Decade",
                    "source": "https://finance.yahoo.com/m/bfe5f2d2-c86c-3ef5-8b37-4978c5ec1e39/these-3-dow-stocks-are-the.html"
                },
                {
                    "title": "7 Blue-Chip Stocks to Buy at an All-Time Low",
                    "source": "https://finance.yahoo.com/news/7-blue-chip-stocks-buy-185545693.html"
                },
                {
                    "title": "Shoplifting Climbs as In-Store Shopping Returns",
                    "source": "https://finance.yahoo.com/m/a5683760-a920-333a-ad10-a01da096129f/shoplifting-climbs-as.html"
                },
                {
                    "title": "New York Governor, Attorney General Ask Three Pharmacy Operators' Commitment Over Abortion Drug Access",
                    "source": "https://finance.yahoo.com/news/york-governor-attorney-general-ask-184831802.html"
                }
            ]
        },
        {
            "ticker": "WBD",
            "news_items": [
                {
                    "title": "Warner Bros. Studio Tour Tokyo - The Making of Harry Potter Opening 16 June 2023",
                    "source": "https://finance.yahoo.com/news/warner-bros-studio-tour-tokyo-120000724.html"
                },
                {
                    "title": "The Last of Us season finale draws series-high viewership despite Oscars competition",
                    "source": "https://finance.yahoo.com/m/09177231-1eb7-3b9a-919b-e34ed8519422/%E2%80%98the-last-of-us%E2%80%99-season.html"
                },
                {
                    "title": "The Way Americans Watch Local Sports Is About to Change",
                    "source": "https://finance.yahoo.com/m/6be016ff-d2b5-3b5e-922b-24f78a62f5f6/the-way-americans-watch-local.html"
                },
                {
                    "title": "How Americans Watch Local Sports Is About to Change, as Cable Bundles Unravel",
                    "source": "https://finance.yahoo.com/m/6be016ff-d2b5-3b5e-922b-24f78a62f5f6/how-americans-watch-local.html"
                },
                {
                    "title": "Media giants signal ad market 'stabilized' after bruising 2022",
                    "source": "https://finance.yahoo.com/news/media-giants-signal-ad-market-stabilized-after-bruising-2022-115937078.html"
                },
                {
                    "title": "VideoAmp Hires Its First CMO as Ad-Measurement Race Heats Up",
                    "source": "https://finance.yahoo.com/m/84b50428-c143-3093-a5d1-209083a525f9/videoamp-hires-its-first-cmo.html"
                },
                {
                    "title": "Media giants hint at improving ad market but the macro picture still 'uncertain'",
                    "source": "https://finance.yahoo.com/video/media-giants-aiming-improve-shaky-153611936.html"
                },
                {
                    "title": "Warner Bros. Discoverys David Zaslav tops list of most overpaid CEOs: Report",
                    "source": "https://finance.yahoo.com/video/warner-bros-discovery-david-zaslav-210815154.html"
                },
                {
                    "title": "Analyst Report: Warner Bros Discovery Inc",
                    "source": "https://finance.yahoo.com/m/89bd0eaa-f811-3936-92ee-11dc6976bfc7/analyst-report%3A-warner-bros.html"
                },
                {
                    "title": "Market Digest: WBD, NCLH, BHF",
                    "source": "https://finance.yahoo.com/m/67deaa8d-e02d-3ce6-81bd-91fc8f092a75/market-digest%3A-wbd%2C-nclh%2C-bhf.html"
                }
            ]
        },
        {
            "ticker": "WDAY",
            "news_items": [
                {
                    "title": "Stock Market Rallies As 11 Bank Giants Aid First Republic, But FRC Dives Late; Apple, Microsoft Flash Buy Signals",
                    "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rallies-as-11.html"
                },
                {
                    "title": "Stock Market Rebounds As 11 Bank Giants Aid First Republic; Apple, Microsoft Flash Buy Signals",
                    "source": "https://finance.yahoo.com/m/deb0efc1-86f0-30b3-b4cc-ffb374ef8bb9/stock-market-rebounds-as-11.html"
                },
                {
                    "title": "Is It Too Late To Consider Buying Workday, Inc. (NASDAQ:WDAY)?",
                    "source": "https://finance.yahoo.com/news/too-consider-buying-workday-inc-110036634.html"
                },
                {
                    "title": "25 Largest Software Companies in the World by Revenue",
                    "source": "https://finance.yahoo.com/news/25-largest-software-companies-world-204009158.html"
                },
                {
                    "title": "13 Best Software Stocks To Invest In According To Hedge Funds",
                    "source": "https://finance.yahoo.com/news/13-best-software-stocks-invest-141835980.html"
                },
                {
                    "title": "Those who invested in Workday (NASDAQ:WDAY) three years ago are up 40%",
                    "source": "https://finance.yahoo.com/news/those-invested-workday-nasdaq-wday-110043412.html"
                },
                {
                    "title": "Workday Co-CEOs to Present at the Morgan Stanley Technology, Media and Telecom Conference on March 9",
                    "source": "https://finance.yahoo.com/news/workday-co-ceos-present-morgan-133000686.html"
                },
                {
                    "title": "Workday, Inc. (NASDAQ:WDAY) Q4 2023 Earnings Call Transcript",
                    "source": "https://finance.yahoo.com/news/workday-inc-nasdaq-wday-q4-104525773.html"
                },
                {
                    "title": "Workday Full Year 2023 Earnings: EPS Misses Expectations",
                    "source": "https://finance.yahoo.com/news/workday-full-2023-earnings-eps-103223730.html"
                },
                {
                    "title": "These Stocks Are Moving the Most Today: Arconic, Hims & Hers, Norwegian, Dentsply, and More",
                    "source": "https://finance.yahoo.com/m/e23c71de-bc7b-35c6-b07e-b1f82569d640/these-stocks-are-moving-the.html"
                }
            ]
        },
        {
            "ticker": "XEL",
            "news_items": [
                {
                    "title": "Nuclear Plant Near Minneapolis Reports Leak of Tainted Water",
                    "source": "https://finance.yahoo.com/news/nuclear-plant-near-minneapolis-reports-001847079.html"
                },
                {
                    "title": "Regulators monitor tritium leak at Minnesota nuclear plant",
                    "source": "https://finance.yahoo.com/news/regulators-monitor-tritium-leak-minnesota-215538499.html"
                },
                {
                    "title": "World's Largest Aircraft Lessor Is Making Exciting Moves",
                    "source": "https://finance.yahoo.com/m/c1dda0f7-8b9e-390c-a681-30ea560f1288/world%27s-largest-aircraft.html"
                },
                {
                    "title": "Xcel Energy (XEL) Rides on Renewable Expansion, Investment",
                    "source": "https://finance.yahoo.com/news/xcel-energy-xel-rides-renewable-135601783.html"
                },
                {
                    "title": "Down -9.11% in 4 Weeks, Here's Why You Should You Buy the Dip in Xcel (XEL)",
                    "source": "https://finance.yahoo.com/news/down-9-11-4-weeks-143502469.html"
                },
                {
                    "title": "The 7 Best Utility Stocks to Buy as Yields Rise",
                    "source": "https://finance.yahoo.com/news/7-best-utility-stocks-buy-201613035.html"
                },
                {
                    "title": "Xcel Energy Full Year 2022 Earnings: Revenues Beat Expectations, EPS In Line",
                    "source": "https://finance.yahoo.com/news/xcel-energy-full-2022-earnings-120731819.html"
                },
                {
                    "title": "5 Utility Stocks to Buy as Volatility Grips Wall Street",
                    "source": "https://finance.yahoo.com/news/5-utility-stocks-buy-volatility-130201091.html"
                },
                {
                    "title": "Xcel Energy Inc. Board Increases 2023 Common Dividend 6.7%, Declares Dividend on Common Stock",
                    "source": "https://finance.yahoo.com/news/xcel-energy-inc-board-increases-004000142.html"
                },
                {
                    "title": "Zacks.com featured highlights include Microchip Technology, Caterpillar, Xcel Energy, Cardinal Health and Archer-Daniels-Midland",
                    "source": "https://finance.yahoo.com/news/zacks-com-featured-highlights-microchip-160404392.html"
                }
            ]
        },
        {
            "ticker": "ZM",
            "news_items": [
                {
                    "title": "MLB umpires will have a new view this season -- on Zoom",
                    "source": "https://finance.yahoo.com/news/mlb-umpires-view-season-zoom-121106800.html"
                },
                {
                    "title": "Play Ball! Major League Baseball and Zoom Announce First-of-its-kind Partnership; Zoom Contact Center to Power Zoom Replay Operations Center",
                    "source": "https://finance.yahoo.com/news/play-ball-major-league-baseball-120000258.html"
                },
                {
                    "title": "3 Things About Zoom Stock That Smart Investors Know",
                    "source": "https://finance.yahoo.com/m/b914011c-ffbd-38ce-950d-944bdda577d8/3-things-about-zoom-stock.html"
                },
                {
                    "title": "A Surprisingly Simple Reason Zoom Stock Can Win in This $21 Billion Market",
                    "source": "https://finance.yahoo.com/m/e4bf8fd1-81ae-38dc-a4e4-57e274fc7c63/a-surprisingly-simple-reason.html"
                },
                {
                    "title": "Cheap Stocks To Buy: Should You Watch These 5 Growth Stocks?",
                    "source": "https://finance.yahoo.com/m/5717a0c8-169c-3016-826c-d2b586ac9014/cheap-stocks-to-buy%3A-should.html"
                },
                {
                    "title": "Meta cuts more jobs in latest tech layoffs",
                    "source": "https://finance.yahoo.com/m/0fba6cc2-3d87-3037-b547-f2d80a477d38/meta-cuts-more-jobs-in-latest.html"
                },
                {
                    "title": "Investors Heavily Search Zoom Video Communications, Inc. (ZM): Here is What You Need to Know",
                    "source": "https://finance.yahoo.com/news/investors-heavily-search-zoom-video-130001901.html"
                },
                {
                    "title": "A Bull Market May Be Coming, but These 2 Tech Stocks Keep Struggling -- Time to Sell?",
                    "source": "https://finance.yahoo.com/m/49549a14-6c68-3b5f-8c4b-336ca42ecb9b/a-bull-market-may-be-coming%2C.html"
                },
                {
                    "title": "Zoom's Growth Is Slowing but It's Not Done",
                    "source": "https://finance.yahoo.com/m/c60157d7-6fd4-37e0-85d8-b974c8eab84a/zoom%27s-growth-is-slowing-but.html"
                },
                {
                    "title": "Best Stock to Buy: Zoom vs. DocuSign",
                    "source": "https://finance.yahoo.com/m/6c76e72b-0cf6-3312-a191-0518b16317ba/best-stock-to-buy%3A-zoom-vs..html"
                }
            ]
        },
        {
            "ticker": "ZS",
            "news_items": [
                {
                    "title": "Is Zscaler (ZS) a Buy as Wall Street Analysts Look Optimistic?",
                    "source": "https://finance.yahoo.com/news/zscaler-zs-buy-wall-street-133001574.html"
                },
                {
                    "title": "14 Best Falling Stocks To Buy Now",
                    "source": "https://finance.yahoo.com/news/14-best-falling-stocks-buy-032714753.html"
                },
                {
                    "title": "Why Zscaler Stock Slumped on Wednesday",
                    "source": "https://finance.yahoo.com/m/5c87f196-c7c9-3dbe-ba98-b8c032c2b5a5/why-zscaler-stock-slumped-on.html"
                },
                {
                    "title": "Zscaler Extends CNAPP Capabilities with Integrated Data Loss Prevention and Threat Intelligence from the Worlds Largest Security Cloud",
                    "source": "https://finance.yahoo.com/news/zscaler-extends-cnapp-capabilities-integrated-120000084.html"
                },
                {
                    "title": "2 Growth Stocks Near Their 52-Week Lows to Buy Hand Over Fist, According to Wall Street",
                    "source": "https://finance.yahoo.com/m/a9ac1797-bf3e-32bd-b929-2702da42b2b2/2-growth-stocks-near-their.html"
                },
                {
                    "title": "2 Magnificent Growth Stocks That Could Triple Your Money by 2028",
                    "source": "https://finance.yahoo.com/m/1d75d9b7-581d-3827-8220-f919e7c6e50e/2-magnificent-growth-stocks.html"
                },
                {
                    "title": "What every Zscaler investor needs to know about the stock",
                    "source": "https://finance.yahoo.com/video/every-zscaler-investor-needs-know-102700522.html"
                },
                {
                    "title": "Zscaler Stock Is Cratering: Should You Buy the Dip?",
                    "source": "https://finance.yahoo.com/m/b4a404e6-d30a-3938-824b-7b60e65094d5/zscaler-stock-is-cratering%3A.html"
                },
                {
                    "title": "Zscaler Appoints Global Sales and Alliances Veteran to Grow Worldwide Zero Trust Ecosystem Sales",
                    "source": "https://finance.yahoo.com/news/zscaler-appoints-global-sales-alliances-130000006.html"
                },
                {
                    "title": "Is It Time to Sell Zscaler Stock?",
                    "source": "https://finance.yahoo.com/m/a175af24-dd6b-307a-b69c-2e7df97c2110/is-it-time-to-sell-zscaler.html"
                }
            ]
        }
    ]
}