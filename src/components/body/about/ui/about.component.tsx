import { Typography } from "antd";
import { ArrowRight } from "react-feather";

const { Title } = Typography;
const About = () => {
  return (
    <div id="about" className="p-20 parentContainer">
      <div className="flex mb-4 about-content">
        <div className="w-[50%] flex justify-center items-center">
          <Title level={1}>About Us</Title>
        </div>
        <div className="w-[50%]">
          <Title level={3}>Great Products, Affordable Prices</Title>
          <Typography className="text-justify">
            At our E-Commerce store, we pride ourselves on offering a vast
            selection of high-quality products at competitive prices. With our
            user-friendly website and secure payment options, shopping with us
            is convenient and hassle-free. Whether you're looking for
            electronics, fashion, home decor, or anything in between, we've got
            you covered. Start browsing now and discover the best deals!
          </Typography>
        </div>
      </div>
      <div className="flex py-20 text-white bg-black">
        <div className="w-[50%] flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1589739900593-8b1b925ee197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            alt="Feature"
            className="w-[350px]"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-between">
          <div className="text-white text-7xl">
            Highlighted <br /> Features
          </div>
          <div className="text-xs">
            <div>Why chose us</div>
            <div className="flex items-center mt-2 text-xs">
              See More <ArrowRight className="ml-2" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
