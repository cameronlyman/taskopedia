import Student from './Components/Student/Student';
import StudentReview from './Components/Student/StudentReview';

function MainBody() {
    const whatWeAreLearning = 'React';
    return (
      <div>
        
        <p>Let's learn some {whatWeAreLearning}</p>
        <ul>
          <li>Go to Best Buy</li>
          <li>Get books to Colby</li>
        </ul>
        <div className='row'>Students Enrolled</div>
        <Student experience={2} name={"John Smith"} headShot={'https://loremflickr.com/100/150/people?lock=56789'}>
          <StudentReview/>
        </Student>
        <Student experience={5} name={"Carrie Balkans"} headShot={'https://loremflickr.com/100/150/people?lock=5679'}>
          <StudentReview/>
        </Student>
        <Student experience={7} name={"Joe Bob"} headShot={'https://loremflickr.com/100/159/people?lock=5678'}/>
      </div>
    );
  }

  export default MainBody;