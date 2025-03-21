import React from 'react';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';

function goal() {
  return (
    <PageSpace>
      <div className="container">
        <goalStyles>
          <SectionTitle className="title"> </SectionTitle>
          <ParagraphText className="goal-text">
            Speaker's Library-তে আপনাকে স্বাগতম, বাংলা ভাষায় বইয়ের সারাংশ এবং
            অন্তর্দৃষ্টিপূর্ণ পর্যালোচনার জন্য আপনার কেন্দ্র। স্বেচ্ছাসেবী
            বন্ধুদের একটি উৎসাহী দল দ্বারা পরিচালিত, আমরা আমাদের মাতৃভাষায়
            শিক্ষা এবং জ্ঞানকে সমর্থন করি।{' '}
            <p>
              আমরা বিশ্বাস করি যে আমাদের চারপাশের বিশ্ব সম্পর্কে গভীর উপলব্ধি
              এবং উপলব্ধি বৃদ্ধির জন্য একজনের স্থানীয় ভাষায় সাহিত্য উপলব্ধি করা
              অপরিহার্য। আমাদের সংকলিত সারাংশ এবং পর্যালোচনার উদ্দেশ্য সাহিত্যে
              সমৃদ্ধ বিশ্বকে সর্বত্র বাংলাভাষীদের কাছে উপলব্ধি যোগ্য করে তোলা।
            </p>
            <p>
              বইয়ের শক্তির মাধ্যমে বাংলা ভাষা ও সংস্কৃতিকে তুলে ধরার লক্ষ্যে
              আসাদের সাথে যোগ দিন। আপনি একজন বই উৎসাহী হোন বা শুধু আপনার পড়ার
              যাত্রা শুরু করুন, Speaker's Library প্রত্যেকের জন্য কিছু উপস্থাপন
              করে।
            </p>
            <p>
              আমাদের সংগ্রহে ডুব দিন এবং আবিষ্কারের যাত্রা শুরু করুন। বাংলা
              ভাষায় সাহিত্যের বৈচিত্র্যময় এবং মোহনীয় জগত
            </p>
            <p>অন্বেষণ করার সময় Speaker's Library-কে আপনার সাথী হতে দিন।</p>
            <p>
              একটি প্রশ্ন, পরামর্শ বা শুধু হ্যালো বলতে চান?
              contact.speakerslibrary@gmail.com-এ আমাদের জন্য একটি সাইন লিখুন।
              অথবা contact us-এ গিয়ে আমাদের সাথে যোগাযোগ করুন
            </p>
          </ParagraphText>
        </goalStyles>
      </div>
    </PageSpace>
  );
}

export default goal;
