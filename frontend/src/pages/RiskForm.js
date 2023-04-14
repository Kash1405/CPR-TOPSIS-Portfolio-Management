import { useState } from 'react';

// const options = ['Option 1', 'Option 2', 'Option 3'];

function Dropdown({ label, options, value, onChange }) {
    console.log(options)
    return (
        <div className="mb-4">
            <label className="block font-bold mb-2">{label}</label>
            <select
                className="w-full p-2 border border-gray-400 rounded shadow"
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
        <form onSubmit={handleSubmit}>
            {
                formData.map((question) => <Dropdown
                    options={question.options}
                    label={question.label}
                    value={values.dropdown1}
                    onChange={(value) => handleChange('dropdown1', value)}
                />)
            }
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={() => { window.location.href = '/result' }}
            >
                Submit
            </button>
        </form>
    );
}

export default RiskForm;

const formData = [
    {
        "label": "Sector",
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