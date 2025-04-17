import { useContext } from 'react';
import { GlobalDataContext } from '@/context/GlobalDataContext';
import { Icon } from "@iconify/react";

export default function About() {
  const { globalData } = useContext(GlobalDataContext);
  let _data = globalData.component?.abouts ?? {}
  let list_items_1 = _data?.list_items_1 ? JSON.parse(_data?.list_items_1) : []
  let list_items_2 = _data?.list_items_2 ? JSON.parse(_data?.list_items_2) : []

  return (
    <>
      {/* About Start */}
      <div className="container-fluid overflow-hidden about py-5" id="about">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item">

                {(_data?.title_part_1 !== "" || _data?.title_part_2 !== "" || _data?.description_1 !== "" ) && <div className="pb-5">

                  {(_data?.title_part_1 !== "" || _data?.title_part_2 !== "") && <h1 className="display-5 text-capitalize">
                    {_data?.title_part_1} <span className="text-primary">{_data?.title_part_2}</span>
                  </h1>}

                  {_data?.description_1 !== ""  && <p className="mb-0">
                    {_data?.description_1}
                  </p>}

                </div>}

                {list_items_1.length > 0 && (
                    <div className="row g-4 d-flex flex-wrap">
                      {list_items_1.map((v,i) => {
                        return (
                          <div className="col-lg-6 flex-grow-1" key={i}>
                            <div className="about-item-inner border p-4">                              
                              {v?.image ?
                                (
                                  <div className="about-image mb-4">
                                    <img
                                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${v.image}`}
                                      className=""
                                      alt={i}
                                      crossOrigin="anonymous"
                                    />
                                    </div>
                                ) :
                                (
                                  <div className="about-icon mb-4">
                                    <i className="fa fa-phone-alt fa-2x" />
                                  </div>
                                )}
                              
                              <h5 className="mb-3">{v?.title}</h5>
                              <p className="mb-0">
                                {v?.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                <p className="text-item my-4">
                  {_data?.description_2}
                </p>

                <div className="row g-4">

                  {(_data?.exp_status =="1" || _data?.exp_status == 1) && <div className="col-lg-6">
                    <div className="exp-box text-center rounded bg-secondary p-4">
                      <h1 className="display-6 text-white">{_data?.exp_num}</h1>
                      <h5 className="text-light mb-0">{_data?.exp_text}</h5>
                    </div>
                  </div>}

                  {list_items_2.length > 0 && (
                    <div className={(_data?.exp_status =="1" || _data?.exp_status == 1) ? `col-lg-6` :  `col-lg-12`}>
                      <div className="rounded">
                        {list_items_2.map((v,i) => {
                          return (
                            <p className="mb-2" key={i}>
                              <i className="fa fa-check-circle text-primary me-1" />
                              {v?.value}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* <div className="col-lg-5 d-flex align-items-center">
                    <a href="#about" className="btn btn-primary rounded py-3 px-5">
                      More About Us
                    </a>
                  </div> */}

                  {(_data?.person_status =="1" || _data?.person_status == 1) && <div className="col-lg-7">
                    <div className="d-flex align-items-center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${_data.person_image}`}
                        className="img-fluid rounded-circle border border-4 border-secondary"
                        style={{ width: 100, height: 100 }}
                        alt="Image"
                        crossOrigin="anonymous"
                      />
                      <div className="ms-4">
                        <h4>{_data?.person_name}</h4>
                        <p className="mb-0">{_data?.person_title}</p>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-img">
                <div className="img-1">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${_data.image_1}`}
                    className="img-fluid rounded h-100 w-100"
                    alt="image_1"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="img-2">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${_data.image_2}`}
                    className="img-fluid rounded w-100"
                    alt="image_2"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>

  )
}
