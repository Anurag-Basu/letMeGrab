import { Carousel } from "antd";
import {
  About,
  ContactSection,
  FAQSection,
  Service,
  SignIn,
  SignUp,
} from "../../..";
import { imageSources } from "../../../../importImages";
import { HomeProps } from "../../../../types";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = ({
  isModalOpen,
  handleCancel,
  setIsModalOpen,
  isLoginModalOpen,
  handleLoginCloseModal,
  handleLoginFormSubmit,
}: HomeProps) => {
  return (
    <>
      <div className="page-body-container" id="home top-[50px]">
        <SignUp
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
        />
        <SignIn
          isOpen={isLoginModalOpen}
          handleCancel={handleLoginCloseModal}
          onFinish={handleLoginFormSubmit}
        />
        <Carousel autoplay>
          {imageSources?.map((src: string, index: number) => (
            <div style={contentStyle} key={index}>
              <img src={src} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <About />
      <Service />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
