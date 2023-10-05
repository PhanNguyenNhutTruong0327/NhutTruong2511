import { useEffect, useState } from "react";
import "./style.css"
import postservices from "../../../services/PostServices";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";

function Policy() {
    const { slug } = useParams();
    const [pages, setPages] = useState([]);
    useEffect(function () {
        (async function () {
            await postservices.getById(slug).then(function (result) {
                setPages(result.data.post);
            })
        })();
    }, [slug]);

    return (
        <div className="gioi-thieu">
            <div className="container">
                <h3 id="title-gt" className="text-center">{pages.title}</h3>
                <div className="content-gt">

                    <div className="content-item">
                        <h6 className="title-item fs-5"></h6>
                        <div className="row mt-3">
                            <div className="col-6">
                                <div className="img-content">
                                    <img src={urlImage + 'Post/' + pages.image} height="auto" width="90%" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="conten-item-text">
                                    <p id="p">{pages.detail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="border"></div>
                            <div className="content-item">
                                <h6 className="title-item fs-5">Sứ mệnh và tầm nhìn</h6>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <div className="img-content">
                                            <img src={require("../../../assets/images/post/gioi-thieu-2.jpg")} height="300px" width="90%" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="conten-item-text">
                                            <p>Đi cùng quy trình làm bánh nghiêm ngặt, khép kín, đòi hỏi nhân viên phải cẩn thận,
                                                tỉ mỉ và chăm chút trong từng công đoạn nhỏ nhất. Fresh Garden cam kết mang đến những sản
                                                phẩm đạt chất lượng cao nhất như một lời tri ân đối với sự yêu mến và tin dùng.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border"></div>
                            <div className="content-item">
                                <h6 className="title-item fs-5">Những giá trị tạo nên Tr Cake</h6>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <div className="img-content">
                                            <img src={require("../../../assets/images/post/gioi-thieu-3.jpg")} height="300px" width="90%" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="conten-item-text text-center">
                                            <p>Từng sản phẩm Tr Cake được đầu tư rất kỹ ngay từ khâu chọn nguyên liệu, đó là những thành phần tươi mới nhất và
                                                chủ yếu đang sử dụng đều đến từ những nhãn hiệu có uy tín như Anchor,
                                                Vivo, Meiji, Komplet… Một số dòng sốt của Ý như sốt pizza, sốt mayonaise cũng được nhập trực tiếp từ Ý.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                </div>
            </div>


        </div>
    );
}

export default Policy;