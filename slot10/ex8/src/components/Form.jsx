import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Form = () => {
  return (
    <div className="container mt-4">
      {/* Card */}
      <div className="card shadow">
        <div className="card-body">
          {/* Alert */}
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-center">Form đặt vé máy bay</h1>

          {/* Form */}
          <form>
            {/* Họ tên */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Họ tên</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <input type="text" className="form-control" id="name" placeholder="Họ tên" />
                <span className="input-group-text">vnd</span>
              </div>
              <small className="form-text text-muted">Phải nhập 5 ký tự, in hoa...</small>
            </div>

            {/* Địa chỉ */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Địa chỉ</label>
              <input type="text" className="form-control" id="address" placeholder="Địa chỉ" />
              <small className="form-text text-muted">Phải nhập 5 ký tự, in hoa...</small>
            </div>

            {/* Đi từ - Đến */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="from" className="form-label">Đi từ</label>
                <select className="form-select" id="from">
                  <option>Hà nội</option>
                  <option>TP Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="to" className="form-label">Đến</label>
                <select className="form-select" id="to">
                  <option>Hà nội</option>
                  <option>TP Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>
            </div>

            {/* Chọn chiều đi */}
            <div className="mb-3">
              <label className="form-label">Chọn chiều đi (Khứ hồi)</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="oneWay" />
                <label className="form-check-label" htmlFor="oneWay">Đi</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="roundTrip" />
                <label className="form-check-label" htmlFor="roundTrip">Về</label>
              </div>
            </div>

            {/* Nút đặt vé */}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary w-100">Đặt vé</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;