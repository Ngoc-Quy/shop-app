import React from 'react';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import blog from '../images/blog-1.jpg';

function SingleBlog() {
  return (
    <div>
      <Meta title={'Bài viết'} />
      <BreadCrumb title="Bài viết" />
      <Container classes="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go to back to blog
                </Link>
                <h3 className="title">A beautiful sunday</h3>
                <img className="img-fluid w-100 my-4" src={blog} alt="blog" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan lacinia sapien egestas congue a
                  quisque neque feugiat maecenas in. Hendrerit aliquam habitant adipiscing quisque fusce parturient
                  dictum vel interdum nascetur. Semper sed est curabitur vestibulum sociis sit vivamus feugiat in purus.
                  Blandit leo ullamcorper aliquam enim neque placerat suspendisse netus interdum sapien. Ornare metus
                  potenti neque ultricies elit nascetur commodo fermentum dignissim purus. Sociis phasellus nunc orci
                  iaculis aenean massa placerat cubilia ac lacinia. Eros platea dapibus egestas aptent nullam
                  suspendisse eget condimentum erat auctor. Nisl aenean sapien est lorem quisque sodales quisque
                  condimentum aenean nisl. Non duis nunc non commodo auctor sociosqu gravida suspendisse maecenas
                  fringilla. Tempus praesent inceptos pulvinar a sociosqu at quisque faucibus diam auctor. Venenatis
                  pulvinar sodales magna velit aliquet elit lectus auctor maecenas rhoncus. Mus mauris nunc rhoncus
                  felis inceptos suscipit nec risus facilisi curabitur. Vulputate ornare justo habitant tortor rutrum
                  natoque sapien integer cubilia lacus. Morbi posuere curae mus laoreet amet quisque aliquam sociosqu
                  habitasse nostra. Magnis viverra iaculis auctor himenaeos sed maecenas dictumst himenaeos quisque
                  eget. Metus ullamcorper hendrerit commodo pellentesque sagittis senectus aliquet dapibus curabitur
                  purus. At mi non mollis placerat at molestie nullam condimentum maecenas conubia. Dolor lectus
                  suspendisse fusce ornare erat sagittis condimentum vivamus conubia nascetur. Ligula curabitur sapien
                  habitasse elit in donec facilisi quis ullamcorper mollis. Porta egestas dui condimentum facilisi a
                  vivamus vulputate eleifend hendrerit metus. Arcu tempor montes leo malesuada volutpat volutpat
                  nascetur ornare sociosqu viverra. Vehicula et sem aliquam sem nascetur torquent metus aenean imperdiet
                  pharetra. Orci cum class ullamcorper praesent egestas gravida et quam ante conubia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleBlog;
