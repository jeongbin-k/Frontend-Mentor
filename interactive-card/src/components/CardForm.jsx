import "./CardForm.css";
import { useState, useRef } from "react";

const CardForm = ({ formData, setFormData, setIsSubmitted }) => {
  const [errors, setErrors] = useState({});

  const nameRef = useRef();
  const numberRef = useRef();
  const yyRef = useRef();
  const mmRef = useRef();
  const cvcRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name] || ((name === "mm" || name === "yy") && errors.date)) {
      setErrors((prev) => ({ ...prev, [name]: "", date: "" }));
    }

    if (name === "number") {
      const formattedValue = value
        .replace(/\s/g, "") // 모든 공백 제거
        .replace(/(\d{4})/g, "$1 ") // 4자리마다 공백 추가
        .trim(); // 마지막에 남는 공백 제거

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // 1. 이름 검사
    if (!formData.name) newErrors.name = "Can't be blank";

    // 2. 번호 검사
    const rawNumber = formData.number.replace(/\s/g, "");
    if (!formData.number) {
      newErrors.number = "Can't be blank";
    } else if (/[^\d\s]/.test(formData.number)) {
      newErrors.number = "Wrong format, numbers only";
    } else if (rawNumber.length < 16) {
      newErrors.number = "Must be 16 digits";
    }

    // 3. yy,mm 검사
    if (!formData.yy || !formData.mm) {
      newErrors.date = "Can't be blank";
    } else if (formData.yy.length < 2 || formData.mm.length < 2) {
      newErrors.date = "Must be 2 digits each";
    }

    // 4. cvc 검사
    if (!formData.cvc) {
      newErrors.cvc = "Can't be blank";
    } else if (formData.cvc.length < 3) newErrors.cvc = "Must be 3 digits";

    setErrors(newErrors);

    if (newErrors.name) {
      nameRef.current.focus();
    } else if (newErrors.number) {
      numberRef.current.focus();
    } else if (newErrors.date) {
      if (!formData.mm || formData.mm.length < 2) {
        mmRef.current.focus();
      } else {
        yyRef.current.focus();
      }
    } else if (newErrors.cvc) {
      cvcRef.current.focus();
    }

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={handleSubmit}>
        {/* 1. 카드 소유자 이름 */}
        <div className="input-group">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Jane Appleseed"
            value={formData.name}
            onChange={handleChange}
            ref={nameRef}
            className={errors.name ? "error-border" : ""}
          />
          {}
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>
        {/* 2. 카드 번호 */}
        <div className="input-group">
          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="e.g.1234 5678 9123 0000"
            maxLength={19}
            value={formData.number}
            onChange={handleChange}
            ref={numberRef}
            className={errors.number ? "error-border" : ""}
          />
          {errors.number && <p className="error-msg">{errors.number}</p>}
        </div>
        <div className="input-row">
          {/* 3. 카드 날짜 */}
          <div className="input-group input-date">
            <label>EXP. DATE (MM/YY)</label>
            <div className="date-inputs">
              <input
                type="text"
                name="mm"
                placeholder="MM"
                maxLength={2}
                value={formData.mm}
                onChange={handleChange}
                ref={mmRef}
                className={errors.date ? "error-border" : ""}
              />
              <input
                type="text"
                name="yy"
                placeholder="YY"
                maxLength={2}
                value={formData.yy}
                onChange={handleChange}
                ref={yyRef}
                className={errors.date ? "error-border" : ""}
              />
            </div>
            {errors.date && <p className="error-msg">{errors.date}</p>}
          </div>
          {/* 24 카드 CVC */}
          <div className="input-group input-cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="cvc"
              maxLength={3}
              value={formData.cvc}
              onChange={handleChange}
              ref={cvcRef}
              className={errors.cvc ? "error-border" : ""}
            />
            {errors.cvc && <p className="error-msg">{errors.cvc}</p>}
          </div>
        </div>
        <button type="submit" className="confirm-btn">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CardForm;
