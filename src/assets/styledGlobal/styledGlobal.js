import { createGlobalStyle } from 'styled-components'
import { configGlobal } from './configGlobal'

export const StyledGlobal = createGlobalStyle`

a, a:hover {
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
}

a {
    color: ${configGlobal.colorTitle}
}

a:hover {
    color: ${configGlobal.colorPrimary}
}

input, input:focus, button, button:focus, select, select:focus, textarea, textarea:focus {
  outline: none;
  box-shadow: none;
}

.form-control {
  border: 1px solid ${configGlobal.colorDesc};
  box-sizing: border-box;
  height: 48px;
}

/* Container */
.container {
  max-width: 1170px;
  margin: auto;
  width: 100%;
}
/* Block */
.d-block {
  display: block
}
/* Flex */
.d-flex {
  display: flex;
}
.ai-center{
  align-items: center;
}
.jc-bw {
  justify-content: space-between;
}
.jc-center {
  justify-content: center;
}
.jc-sa {
  justify-content: space-around
}
.row-fb {
  display: flex;
  flex-flow: row wrap;
}
.col-fb-1 {
  max-width: 8.33%;
  flex-basis: 8.33%;
}
.col-fb-2 {
  max-width: 16.66%;
  flex-basis: 16.66%;
}
.col-fb-3 {
  max-width: 25%;
  flex-basis: 25%;
}
.col-fb-4 {
  max-width: 33.33%;
  flex-basis: 33.33%;
}
.col-fb-5 {
  max-width: 41.66%;
  flex-basis: 41.66%;
}
.col-fb-6 {
  max-width: 50%;
  flex-basis: 50%;
}
.col-fb-7 {
  max-width: 58.33%;
  flex-basis: 58.33%;
}
.col-fb-8 {
  max-width: 66.66%;
  flex-basis: 66.66%;
}
.col-fb-9 {
  max-width: 75%;
  flex-basis: 75%;
}
.col-fb-10 {
  max-width: 83.33%;
  flex-basis: 83.33%;
}
.col-fb-11 {
  max-width: 91.66%;
  flex-basis: 91.66%;
}
.col-fb-12 {
  max-width: 100%;
  flex-basis: 100%;
}
/* Text */
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-justify {
  text-align: justify;
}
.text-normal {
  text-transform: none;
}
.text-cap,
.text-capitalize {
  text-transform: capitalize;
}
.text-upp,
.text-uppercase {
  text-transform: uppercase;
}
/* Padding && Margin */
.p-1 {
  padding: 1rem;
}
.p-2 {
  padding: 2rem;
}
.p-3 {
  padding: 3rem;
}
.p-4 {
  padding: 4rem;
}
.p-5 {
  padding: 5rem;
}
.pt-1 {
  padding-top: 1rem;
}
.pt-2 {
  padding-top: 2rem;
}
.pt-3 {
  padding-top: 3rem;
}
.pt-4 {
  padding-top: 4rem;
}
.pt-5 {
  padding-top: 5rem;
}
.pb-1 {
  padding-bottom: 1rem;
}
.pb-2 {
  padding-bottom: 2rem;
}
.pb-3 {
  padding-bottom: 3rem;
}
.pb-4 {
  padding-bottom: 4rem;
}
.pb-5 {
  padding-bottom: 5rem;
}
.pr-1 {
  padding-right: 1rem;
}
.pr-2 {
  padding-right: 2rem;
}
.pr-3 {
  padding-right: 3rem;
}
.pr-4 {
  padding-right: 4rem;
}
.pr-5 {
  padding-right: 5rem;
}
.pl-1 {
  padding-left: 1rem;
}
.pl-2 {
  padding-left: 2rem;
}
.pl-3 {
  padding-left: 3rem;
}
.pl-4 {
  padding-left: 4rem;
}
.pl-5 {
  padding-left: 5rem;
}
.m-1 {
  margin: 1rem;
}
.m-2 {
  margin: 2rem;
}
.m-3 {
  margin: 3rem;
}
.m-4 {
  margin: 4rem;
}
.m-5 {
  margin: 5rem;
}
.mt-1 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 2rem;
}
.mt-3 {
  margin-top: 3rem;
}
.mt-4 {
  margin-top: 4rem;
}
.mt-5 {
  margin-top: 5rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.mb-3 {
  margin-bottom: 3rem;
}
.mb-4 {
  margin-bottom: 4rem;
}
.mb-5 {
  margin-bottom: 5rem;
}
.mr-1 {
  margin-right: 1rem;
}
.mr-2 {
  margin-right: 2rem;
}
.mr-3 {
  margin-right: 3rem;
}
.mr-4 {
  margin-right: 4rem;
}
.mr-5 {
  margin-right: 5rem;
}
.ml-1 {
  margin-left: 1rem;
}
.ml-2 {
  margin-left: 2rem;
}
.ml-3 {
  margin-left: 3rem;
}
.ml-4 {
  margin-left: 4rem;
}
.ml-5 {
  margin-left: 5rem;
}
/* Heading && Paragraph */
h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 2em;
}
h4 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1.375em;
}
h6 {
  font-size: 1rem;
}
p {
  font-size: 1rem;
  color: ${configGlobal.colorDesc}
}
h1,h2,h3,h4,h5,h6,p {
    margin: 0;
}
/* Ul, Ol */
ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
/* Button */
.btn {
  padding: 1rem 3rem;
  cursor: pointer;
  transition: ${configGlobal.transition};
}
.btn.smaller {
  padding: 3px 10px;
}
.btn:hover {
  transition: ${configGlobal.transition};
}
.btn-primary {
  border: 1px solid ${configGlobal.colorBorder};
  background-color: ${configGlobal.colorTitle};
  color: white;
  border-color: ${configGlobal.colorTitle};
}
.btn-primary:hover {
  background-color: white;
  color: ${configGlobal.colorTitle};
  border-color: ${configGlobal.colorTitle};
}
.btn-secondary {
  border: 1px solid white;
  background-color: white;
  color: ${configGlobal.colorTitle};
  border-color: ${configGlobal.colorTitle};
}
.btn-secondary:hover {
  background-color: ${configGlobal.colorTitle};
  color: white;
  border-color: white;
}
/* Width */
.w-25 {
  width: 25%;
}
.w-50 {
  width: 50%;
}
.w-75 {
  width: 75%;
}
.w-100 {
  width: 100%;
}
/* Img */
img {
  max-width: 100%;
}
/* Float */
.float-right {
  float: right
}
.float-left {
  float: left
}
`;