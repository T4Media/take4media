import "./blog.scss";
import BlogBanner from "../../components/blog-page-component/blog-banner/blog-banner";
import BlogSection from "./../../components/blog-page-component/blog-section/blog-section";
import ProjectInMind from "../../components/project_in_mind/project_in_mind";
import Footer from "../../components/footer/footer";

const Blog = () => {
  return (
    <div className="blog-page">
      <BlogBanner />
      <BlogSection />
      <ProjectInMind
        data={{
          heading: "Have any project in mind?",
          buttonLabel: "MAKE INQUIRY",
        }}
      />
      <Footer />
    </div>
  );
};

export default Blog;
