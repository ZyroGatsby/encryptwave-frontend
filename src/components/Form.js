/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validate } from '../utils/helpers';

function Form() {
  const initialValues = { password: '', key: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [encoded, setEncoded] = useState({});

  // Function to handle form value change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Function to habdle submit (validate form values & set isSubmit to true)
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    const encodedFromLocalStorage = localStorage.getItem('encoded');
    if (encodedFromLocalStorage) {
      setEncoded(JSON.parse(encodedFromLocalStorage));
    }
  }, [setEncoded]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Encode the form values to get ciphered password from backend
      axios.post(`https://search-smartly.deta.dev/encode`, formValues).then((res) => {
        const encodedPassword = res.data;
        const current = new Date();
        const time = current.toLocaleString();

        const encoded = { encodedPassword: encodedPassword, time: time };
        setEncoded(encoded);
        localStorage.setItem('encoded', JSON.stringify(encoded));
      });
    }
  }, [formErrors]);

  return (
    <section className="px-4 md:px-2 w-full md:w-[300px] xl:w-[300px]">
      <pre className="hidden">{JSON.stringify(formValues)}</pre>
      <div
        className={`h-18 my-4 bg-gradient-to-r from-emerald-400 to-teal-100 flex justify-center items-center p-3 rounded-md shadow-lg transition-all transform-all hover:scale-105 cursor-pointer  ${
          !encoded.encodedPassword ? 'hidden' : 'relative'
        } `}
        onClick={() => {
          navigator.clipboard.writeText(encoded.encodedPassword).then(function () {
            alert(`${encoded.encodedPassword} copied to clipboard!`);
          });
        }}
      >
        <div className="text-slate-800 text-center">
          <div>{encoded.encodedPassword}</div>
          <div className="font-mono text-xs">{encoded.time}</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-gray-700 text-sm hidden lg:block">Password</span>
          <input
            type="text"
            name="password"
            className="focus:ring-green-500 focus:border-green-500 block w-full py-3 pl-7 pr-12 text-sm border border-gray-300 rounded-md"
            placeholder="Enter Password"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>
        <span className="text-red-400 font-medium text-sm my-1 tracking-wide">
          {formErrors.password}
        </span>

        <label className="block mt-4">
          <span className="text-gray-700 text-sm hidden lg:block">Key</span>
          <input
            type="text"
            name="key"
            className="focus:ring-green-500 focus:border-green-500 block w-full py-3 pl-7 pr-12 text-sm border border-gray-300 rounded-md"
            placeholder="Enter Key"
            value={formValues.key}
            onChange={handleChange}
          />
        </label>
        <span className="text-red-400 font-medium text-sm my-1 tracking-wide">
          {formErrors.key}
        </span>
        <button
          type="submit"
          className="mt-6 group relative w-full flex justify-center py-4 lg:py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Encode
        </button>
      </form>
    </section>
  );
}

export default Form;
