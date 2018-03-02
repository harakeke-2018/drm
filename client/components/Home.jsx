import React from 'react'

// import Quote from './Quote'
import LoginForm from './LoginForm'
import Log from './Log'
import StockItem from './StockItem'
// import Navbar from './Navbar'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                { id: 1, type: 'Water', quantity: 30, },
                { id: 2, type: 'Blankets', quantity: 1 },
                { id: 3, type: 'Matches', quantity: 500 },
                { id: 4, type: 'Face Paint', quantity: 99999 },
                { id: 5, type: 'Dragon', quantity: 1 },
                { id: 6, type: 'Nuclear Thermometer', quantity: 5 }
            ]
        }
    }

    render() {
        return (
            <div>
                {/* Table Div */}

                <div style={{ width: '50%', margin: 'auto' }}>
                    <h2 style={{ textAlign: 'center' }}>Stock List</h2>
                    {this.state.items.map((item, id) => {
                        return <div key={id}>
                            <StockItem item={item} />
                        </div>
                    })}
                </div>

                <LoginForm />

                {/* <Navbar /> */}
                {/* <div className='quote'>
                <Quote />
                </div> */}
            </div>
        )
    }
}

export default Home
