import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import { Helmet } from 'react-helmet';



// const options = ['Option 1', 'Option 2', 'Option 3'];

function Dropdown({ label, options, value, onChange }) {
    console.log(options)
    return (

        <div>
            <div className="m-2 p-5 text-white border-yellow-600">
                <label className="block font-bold mb-2">{label}</label>
                <select
                    className="w-2/3 p-2 bg-black border border-white rounded shadow focus:border-yellow-600"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                >
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.label} value={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
}

function RiskForm() {
    const [values, setValues] = useState({
        dropdown1: '',
        dropdown2: '',
        dropdown3: '',
        dropdown4: '',
        dropdown5: '',
        dropdown6: '',
        dropdown7: '',
        dropdown8: '',
        dropdown9: '',
        dropdown10: '',
        dropdown11: '',
    });

    function handleChange(field, value) {
        setValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="flex">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <Sidebar />
            <div >
                <Topbar />
                <div className="left-80 absolute top-20 bg-black w-3/4 m-5">
                    <div>
                        <p className='text-white p-5 text-xl font-bold text-center -mt-5'>Risk Form</p>
                    </div>
                    <div className='border-yellow-600 border-2 pl-32 pt-8'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 '>
                                {

                                    formData.map((question) =>
                                        <div className='-mt-8'>
                                            <Dropdown
                                                options={question.options}
                                                label={question.label}
                                                value={values[question.dropdown]}
                                                onChange={(value) => handleChange(question.dropdown, value)}
                                            /></div>
                                    )

                                }
                            </div>
                            <div className='flex justify-around'>
                                <button
                                    className="bg-black shadow-lg ml-72 -mt-20 shadow-white border-white border-2 hover:bg-yellow-700 hover:border-black hover:text-black hover:shadow-none text-white font-bold py-2 px-4 mb-40 rounded m-5 w-56 text-xl"
                                    type="submit"
                                    onClick={() => { window.location.href = '/result' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RiskForm;

const formData = [
    {
        "label": "Sector",
        "dropdown": "dropdown1",
        "options": [
            {
                'label': 'Consumer Cyclical'
            },
            {
                'label': 'Technology'
            },
            {
                'label': 'Healthcare'
            },
            {
                'label': 'Communication Services'
            },
            {
                'label': 'Industrials'
            }, {
                'label': 'Consumer Defensive'
            },
            {
                'label': "Real Estate"
            },
            {
                'label': "Utilities"
            },
            {
                'label': "Energy"
            },
            {
                'label': "Financial Services"
            }]
    },
    {
        "label": "Age",
        "dropdown": "dropdown2",
        "options": [
            {
                "label": "Under 25",
                "value": 5
            },
            {
                "label": "25-40",
                "value": 4
            },
            {
                "label": "40-55",
                "value": 3
            },
            {
                "label": "55-70",
                "value": 2
            },
            {
                "label": "Over 70",
                "value": 1
            }
        ]
    },
    {
        "label": "Income level",
        "dropdown": "dropdown3",
        "options": [
            {
                "label": "Less than $50,000",
                "value": 1
            },
            {
                "label": "$50,000 - $100,000",
                "value": 2
            },
            {
                "label": "$100,000 - $250,000",
                "value": 3
            },
            {
                "label": "$250,000 - $500,000",
                "value": 4
            },
            {
                "label": "Over $500,000",
                "value": 5
            }
        ]
    },
    {
        "label": "Investment experience",
        "dropdown": "dropdown4",
        "options": [
            {
                "label": "No experience",
                "value": 1
            },
            {
                "label": "Some experience, but not a lot",
                "value": 2
            },
            {
                "label": "Moderate amount of experience",
                "value": 3
            },
            {
                "label": "Extensive investment experience",
                "value": 4
            },
            {
                "label": "Professional investor",
                "value": 5
            }
        ]
    },
    {
        "label": "Investment timeframe",
        "dropdown": "dropdown5",
        "options": [
            {
                "label": "Less than 3 years",
                "value": 1
            },
            {
                "label": "3-5 years",
                "value": 2
            },
            {
                "label": "5-10 years",
                "value": 3
            },
            {
                "label": "10-20 years",
                "value": 4
            },
            {
                "label": "More than 20 years",
                "value": 5
            }
        ]
    },
    {
        "label": "Primary investment goal",
        "dropdown": "dropdown6",
        "options": [
            {
                "label": "Preservation of capital",
                "value": 1
            },
            {
                "label": "Income generation",
                "value": 2
            },
            {
                "label": "Growth with minimal risk",
                "value": 3
            },
            {
                "label": "High growth potential",
                "value": 4
            },
            {
                "label": "Speculative investments",
                "value": 5
            }
        ]
    },
    {
        "label": "Reaction to a 20% decrease in portfolio value",
        "dropdown": "dropdown7",
        "options": [
            {
                "label": "Extremely anxious",
                "value": 1
            },
            {
                "label": "Somewhat anxious",
                "value": 2
            },
            {
                "label": "Neutral",
                "value": 3
            },
            {
                "label": "Somewhat comfortable",
                "value": 4
            },
            {
                "label": "Extremely comfortable",
                "value": 5
            }
        ]
    },
    {
        "label": "Comfort level with portfolio loss",
        "dropdown": "dropdown8",
        "options": [
            {
                "label": "None",
                "value": 1
            },
            {
                "label": "Up to 5%",
                "value": 2
            },
            {
                "label": "Up to 10%",
                "value": 3
            },
            {
                "label": "Up to 20%",
                "value": 4
            },
            {
                "label": "More than 20%",
                "value": 5
            }
        ]
    },
    {
        "label": "Importance of beating the market",
        "dropdown": "dropdown9",
        "options": [
            {
                "label": "Not at all important",
                "value": 1
            },
            {
                "label": "Somewhat important",
                "value": 2
            },
            {
                "label": "Moderately important",
                "value": 3
            },
            {
                "label": "Very important",
                "value": 4
            },
            {
                "label": "Extremely important",
                "value": 5
            }
        ]
    },
    {
        "label": "Importance of stable and predictable returns",
        "dropdown": "dropdown10",
        "options": [
            {
                "label": "Not at all important",
                "value": 1
            },
            {
                "label": "Somewhat important",
                "value": 2
            },
            {
                "label": "Moderately important",
                "value": 3
            },
            {
                "label": "Very important",
                "value": 4
            },
            {
                "label": "Extremely important",
                "value": 5
            }
        ]
    },
    {
        "label": "Overall attitude towards risk",
        "dropdown": "dropdown11",
        "options": [
            {
                "label": "Extremely risk-averse",
                "value": 1
            },
            {
                "label": "Somewhat risk-averse",
                "value": 2
            },
            {
                "label": "Neutral",
                "value": 3
            },
            {
                "label": "Somewhat risk-tolerant",
                "value": 4
            },
            {
                "label": "Extremely risk-tolerant",
                "value": 5
            }
        ]
    }

]