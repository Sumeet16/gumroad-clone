import React from 'react'
import "./Dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard_container flex_row">
                <Sidebar />
                <div className="dashboard_info_section">
                    <div>
                        <p className="big-heading">Welcome to Gumroad.</p>
                    </div>
                    <div className="dashboard_summary_report_section">
                        <div className="earning_report">
                            <div className="card">
                                <div>
                                    Balance
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIuMDJjLTUuNTI0IDAtMTAgNC40NzctMTAgMTBzNC40NzYgMTAgMTAgMTBjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzgtMTAtMTAtMTBabTAgMmE4IDggMCAxIDEtLjAwMSAxNiA4IDggMCAwIDEgMC0xNlptMCAzYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMlptMCAzYTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMiAwdi01YTEgMSAwIDAgMC0xLTFaIiBmaWxsPSIjMDAwIi8+PC9zdmc+" className='sidebar_nav_item_img' alt="info" srcset="" />
                                </div>
                                <p className="balance"><span className='itallic'>$</span>0</p>
                            </div>
                            <div className="card">
                                <div>
                                    Last 7 days
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIuMDJjLTUuNTI0IDAtMTAgNC40NzctMTAgMTBzNC40NzYgMTAgMTAgMTBjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzgtMTAtMTAtMTBabTAgMmE4IDggMCAxIDEtLjAwMSAxNiA4IDggMCAwIDEgMC0xNlptMCAzYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMlptMCAzYTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMiAwdi01YTEgMSAwIDAgMC0xLTFaIiBmaWxsPSIjMDAwIi8+PC9zdmc+" className='sidebar_nav_item_img' alt="info" srcset="" />
                                </div>
                                <p className="balance"><span className='itallic'>$</span>0</p>
                            </div>
                            <div className="card">
                                <div>
                                    Last 28 days
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIuMDJjLTUuNTI0IDAtMTAgNC40NzctMTAgMTBzNC40NzYgMTAgMTAgMTBjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzgtMTAtMTAtMTBabTAgMmE4IDggMCAxIDEtLjAwMSAxNiA4IDggMCAwIDEgMC0xNlptMCAzYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMlptMCAzYTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMiAwdi01YTEgMSAwIDAgMC0xLTFaIiBmaWxsPSIjMDAwIi8+PC9zdmc+" className='sidebar_nav_item_img' alt="info" srcset="" />
                                </div>
                                <p className="balance"><span className='itallic'>$</span>0</p>
                            </div>
                            <div className="card">
                                <div>
                                    Total earnings
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIuMDJjLTUuNTI0IDAtMTAgNC40NzctMTAgMTBzNC40NzYgMTAgMTAgMTBjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzgtMTAtMTAtMTBabTAgMmE4IDggMCAxIDEtLjAwMSAxNiA4IDggMCAwIDEgMC0xNlptMCAzYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMlptMCAzYTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMiAwdi01YTEgMSAwIDAgMC0xLTFaIiBmaWxsPSIjMDAwIi8+PC9zdmc+" className='sidebar_nav_item_img' alt="info" srcset="" />
                                </div>
                                <p className="balance"><span className='itallic'>$</span>0</p>
                            </div>
                        </div>
                        <div className="best_seller_section">
                            <p className="heading">Best selling</p>
                            <div className="card_dotted">
                                <p>You haven't made any sales yet. Learn how to <a href="#">build a following</a> and <a href="#">sell on Gumroad Discover</a></p>
                            </div>
                        </div>
                        <div className="activity_section">
                            <p className="heading">Activity</p>
                            <div className="card_dotted">
                                <p>Followers and sales will show up here as they come in. For now, <a href="#">create a product</a> or <a href="#">customize your profile</a>`</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard