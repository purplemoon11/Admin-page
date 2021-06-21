import React from 'react'
import './widgetLg.css'

const WidgetLg = () => {

const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
}

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/84769010_1554860214655391_1106064287580815360_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=19PnCg1rNYsAX-WG6c9&_nc_ht=scontent.fktm10-1.fna&oh=b60985481eb3e8d19a6cd7e8ebde104e&oe=60D2BBC8" alt="" className="widgetLgImg" />
                        <span className="widgetLgNamae">Anusha Baniya</span>
                    </td>
                    <td className="widgetLgDate">19 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/84769010_1554860214655391_1106064287580815360_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=19PnCg1rNYsAX-WG6c9&_nc_ht=scontent.fktm10-1.fna&oh=b60985481eb3e8d19a6cd7e8ebde104e&oe=60D2BBC8" alt="" className="widgetLgImg" />
                        <span className="widgetLgNamae">Anusha Baniya</span>
                    </td>
                    <td className="widgetLgDate">19 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/84769010_1554860214655391_1106064287580815360_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=19PnCg1rNYsAX-WG6c9&_nc_ht=scontent.fktm10-1.fna&oh=b60985481eb3e8d19a6cd7e8ebde104e&oe=60D2BBC8" alt="" className="widgetLgImg" />
                        <span className="widgetLgNamae">Anusha Baniya</span>
                    </td>
                    <td className="widgetLgDate">19 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type='Pending' />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/84769010_1554860214655391_1106064287580815360_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=19PnCg1rNYsAX-WG6c9&_nc_ht=scontent.fktm10-1.fna&oh=b60985481eb3e8d19a6cd7e8ebde104e&oe=60D2BBC8" alt="" className="widgetLgImg" />
                        <span className="widgetLgNamae">Anusha Baniya</span>
                    </td>
                    <td className="widgetLgDate">19 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
