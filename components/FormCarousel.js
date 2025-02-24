import React from "react";
import { Carousel } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { Icon } from "@iconify/react";

export default function FormCarousel() {
    const { globalData } = useContext(GlobalDataContext);
    let _data = globalData.component?.["banner-forms"] ?? {}
    let banner_items = _data?.form_items ? JSON.parse(_data?.form_items) : []

    const [formData, setFormData] = useState({});

    const [loading, setLoading] = useState(false); // To manage API request state
    const [error, setError] = useState(null); // T
    const [success, setSuccess] = useState(null); // T

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        let formvalue = { ...formData }
        for (const [key, value] of Object.entries(formvalue)) {
            if (key.endsWith("-date")) {
                const baseKey = key.replace("-date", "");
                const dateValue = formatDateToDDMMYYYY(value);
                const timeValue = formData[`${baseKey}-time`] ? ` ${formData[`${baseKey}-time`]}` : "";
                delete formvalue?.[`${baseKey}-time`]
                delete formvalue?.[`${baseKey}-date`]
                formvalue[baseKey] = `${dateValue}${timeValue}`;
            }
        }



        const body = {
            question_list: JSON.stringify(globalData.question_list),
            value: JSON.stringify(formvalue)
        }
        // Here you can send the data to your server or perform another action.
        setLoading(true);
        setError(null);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/formsubmits';
        try {
            const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });

            if (!response.ok) {
                alert("Gửi không thành công. Xin vui lòng thử lại.");
            } else {
                setSuccess(true)
                // setFormData({});
            }
          } catch (err) {
            console.error("API Error:", err);
            setError(err.message);
          } finally {
            setLoading(false);
          }


    };

    const formatDateToDDMMYYYY = (date) => {
        if (!date) return "";
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    };

    const showComponent = (v, i) => {
        let _component;
        if (v.status == 1 || v.status == "1") {
            switch (v.type) {
                case "select":
                    let option = v?.select_options ? JSON.parse(v?.select_options) : []
                    _component = (
                        <div className="col-12" key={i}>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                required
                                name={v.id}
                                onChange={handleChange}
                                value={formData[v.id] ?? ""}
                                disabled={success ? success : loading}
                            >
                                <option value="">{v.placeholder}</option>
                                {option && option.map((m, n) => {
                                    return (
                                        <option value={m.title}>{m.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                    )
                    break;
                case "text":
                    _component = (
                        <div className="col-12" key={i}>
                            <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    {v?.icon !== "" ?
                                        (<Icon
                                            icon={v?.icon}
                                            height="20"
                                        />) :
                                        (
                                            <span className="fas fa-map-marker-alt" />
                                        )}
                                    {" "}
                                    <span className="ms-1">{v.title}</span>
                                </div>
                                <input
                                    className="form-control"
                                    type="text"
                                    name={v.id}
                                    placeholder={v.placeholder}
                                    aria-label="Enter a City or Airport"
                                    required={v.required_status == 1 ? true : false}
                                    onChange={handleChange}
                                    value={formData[v.id] ?? ""}
                                    disabled={success ? success : loading}
                                />
                            </div>
                        </div>
                    )
                    break;
                case "datetime":
                    _component = (
                        <div className="col-12" key={i}>
                            <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    {v?.icon !== "" ?
                                        (<Icon
                                            icon={v?.icon}
                                            height="20"
                                        />) :
                                        (
                                            <span className="fas fa-calendar-alt" />
                                        )}
                                    <span className="ms-1">{v.title}</span>
                                </div>
                                <input className="form-control" type="date" name={v.id + "-date"} onChange={handleChange} value={formData[v.id + "-date"] ?? ""} required={v.required_status == 1 ? true : false} disabled={success ? success : loading}/>
                                <input className="form-control" type="time" name={v.id + "-time"} onChange={handleChange} value={formData[v.id + "-time"] ?? ""} required={v.required_status == 1 ? true : false} disabled={success ? success : loading}/>
                            </div>
                        </div>
                    )
                    break;
                case "date":
                    _component = (
                        <div className="col-12" key={i}>
                            <div className="input-group">
                                <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    {v?.icon !== "" ?
                                        (<Icon
                                            icon={v?.icon}
                                            height="20"
                                        />) :
                                        (
                                            <span className="fas fa-calendar-alt" />
                                        )}
                                    <span className="ms-1">{v.title}</span>
                                </div>
                                <input className="form-control" type="date" name={v.id  + "-date"} onChange={handleChange} value={formData[v.id + "-date"] ?? ""} required={v.required_status == 1 ? true : false} disabled={success ? success : loading} />
                            </div>
                        </div>
                    )
                    break;
                case "description":
                    _component = (
                        <div className="col-12" key={i}>
                            {v.title}
                        </div>
                    )
                    break;

            }
        }
        return _component
    }

    return (
        <>
            <>
                {/* Carousel Start */}
                <div className="header-carousel" id="header-carousel">
                    <Carousel controls={false} interval={null}>
                        {banner_items?.length > 0 && banner_items.map((v, i) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.image}`}
                                        alt="Slide"
                                        crossOrigin="anonymous"
                                    />
                                    <div className="carousel-caption">
                                        <div className="container py-4">
                                            <div className="row g-5">
                                                {/* Form Start */}
                                                {(_data?.question_status == "1" || _data?.question_status == 1) &&
                                                    <div
                                                        className="col-lg-6 fadeInLeft animated"
                                                        data-animation="fadeInLeft"
                                                        data-delay="1s"
                                                        style={{ animationDelay: "1s" }}
                                                    >
                                                        <div className="bg-secondary rounded p-5">
                                                            <h4 className="text-white mb-4">
                                                                {_data?.question_title}
                                                            </h4>
                                                            <form onSubmit={handleSubmit} >
                                                                <div className="row g-3">
                                                                    {globalData?.question_list && globalData?.question_list.map((v, i) => { return showComponent(v, i) })}
                                                                    <div className="col-12">
                                                                        <button className="btn btn-light w-100 py-2" type="submit" disabled={success ? success : loading}>
                                                                            {success ? _data?.question_btn_text_success : _data?.question_btn_text}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                }
                                                {/* Caption Start */}
                                                <div
                                                    className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                                                    data-animation="fadeInRight"
                                                    data-delay="1s"
                                                    style={{ animationDelay: "1s" }}
                                                >
                                                    <div className="text-start">
                                                        <h1 className="display-5 text-white">
                                                            {v.title}
                                                        </h1>
                                                        {v.description.split("\n").map((line, index) => (
                                                            <React.Fragment key={index}>
                                                            {line}
                                                            <br />
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
                {/* Carousel End */}
            </>

        </>
    )
}
