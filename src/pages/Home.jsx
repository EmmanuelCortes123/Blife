
function Home() {
    return (
        <>
            <div className='banner'>
                <div>
                    <div className='float-end mt-3 me-5'>
                        <img src={require('../images/promo.png')} alt="promo" />
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 mt-5 g-4">
                <div className="col">
                    <div className="card">
                        <img src={require('../images/prod.png')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">Citrate Mag</span>
                                <span className="card-text card-detail-price">$273.00</span>
                            </div>
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">240 Cápsulas | 800 Mg</span>
                                <span className="card-text card-detail-price">$134.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../images/prod.png')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">Citrate Mag</span>
                                <span className="card-text card-detail-price">$273.00</span>
                            </div>
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">240 Cápsulas | 800 Mg</span>
                                <span className="card-text card-detail-price">$134.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../images/prod.png')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">Citrate Mag</span>
                                <span className="card-text card-detail-price">$273.00</span>
                            </div>
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">240 Cápsulas | 800 Mg</span>
                                <span className="card-text card-detail-price">$134.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={require('../images/prod.png')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">Citrate Mag</span>
                                <span className="card-text card-detail-price">$273.00</span>
                            </div>
                            <div className='card-price'>
                                <span className="card-title col card-detail-price">240 Cápsulas | 800 Mg</span>
                                <span className="card-text card-detail-price">$134.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;