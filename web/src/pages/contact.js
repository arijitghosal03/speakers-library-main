import React from 'react';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';

function contact() {
  return (
    <PageSpace>
      <div className="container">
        <goalStyles>
          <SectionTitle className="title">Contact Us</SectionTitle>
          <ParagraphText className="goal-text">
            কোনো প্রশ্ন আছে, বা ফিডব্যাক দিতে চান? অথবা শুধু হ্যালো বলতে চান? আমরা আপনার থেকে শুনে অবশ্যই খুব
            খুশি হবো।
            
            <p>
              আপনার মূল্যবান মতামত দিন, অথবা আমাদের জানান আমরা আরো কিভাবে উন্নত হতে পারি, অথবা আমাদের জন্য
              একটি লাইন লিখতে চান, আমাদের মেইল করুন contact.speakerslibrary@gmail.com এ। বা আপনি এই লিংক এ
              ক্লিক করে কিছু লিখতে পারেন।
            </p>
            
            <p>
              আমরা সবসময়ই আপনার থেকে বার্তা পেয়ে খুশি হবো এবং আপনাকে যথাসম্ভব সময়ে উত্তর দিতে চেষ্টা করবো।
            </p>
            
            <p>
              আপনাকে ধন্যবাদ Speaker's Library কে আপনার সারাংশ পাঠের চয়ন করার জন্য।
            </p>
            
            <p>
              আমরা আপনার বার্তার অপেক্ষায় রইলাম।
            </p>
          </ParagraphText>
        </goalStyles>
      </div>
    </PageSpace>
  );
}

export default contact;