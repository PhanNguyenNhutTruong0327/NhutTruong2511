function Policy() {
    return (
        <section>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <h3 className="text-center">Chinh sach doi tra</h3>
                                <div className="content mt-4">
                                    <div className="text-center">
                                        {/* <img src={urlImage + "post/" + data.image} alt="" className="img-fluid" /> */}
                                        photo
                                    </div>
                                </div>
                                <div className="content mt-4">
                                    <p className="mt-1 ">Noi dung</p>
                                </div>
                            </div>
                            {/* <div className="col-md-4">b</div> */}
                        </div>

                    </div>
                    <div className="col-md-2 "></div>
                </div>
            </div>
        </section>
    );
}

export default Policy;