import React from 'react';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';

function disclaimer() {
  return (
    <PageSpace>
      <div className="container">
        <goalStyles>
          <SectionTitle className="title"></SectionTitle>
          <ParagraphText className="goal-text">
            <p>
              স্পিকার'স লাইব্রেরী হল বইয়ের সারাংশ এবং পর্যালোচনার একটি প্ল্যাটফর্ম,
              যা স্বেচ্ছাসেবক বন্ধুদের একটি দল দ্বারা পরিচালিত হয়। যদিও আমরা সঠিক এবং 
              অন্তর্দৃষ্টিপূর্ণ সারসংক্ষেপ এবং পর্যালোচনা প্রদান করার চেষ্টা করি, 
              এই সাইটে প্রকাশিত মতামতগুলি পৃথক অবদানকারীদের এবং অগত্যা সমগ্র গোষ্ঠীর 
              মতামতকে প্রতিফলিত করে না। স্পিকার'স লাইব্রেরীতে দেওয়া তথ্য শুধুমাত্র 
              সাধারণ তথ্যের উদ্দেশ্যে এবং পেশাদার পরামর্শ হিসাবে বিবেচনা করা উচিত নয়। 
              পাঠকদের তাদের নিজস্ব গবেষণা পরিচালনা করতে এবং জ্ঞাত সিদ্ধান্ত নিতে 
              উৎসাহিত করা হয়। আমরা এই সাইটে উপস্থাপিত কোনো তথ্যের যথার্থতা, 
              সম্পূর্ণতা বা নির্ভরযোগ্যতার গ্যারান্টি দেই না। স্পিকার'স লাইব্রেরীর 
              ব্যবহার আপনার নিজের ঝুঁকিতে। এই ওয়েবসাইটের ব্যবহার থেকে উদ্ভূত কোনো 
              ক্ষতি, ক্ষয়ক্ষতি বা অসুবিধার জন্য আমরা দায়ী থাকবো না।
            </p>
          </ParagraphText>
        </goalStyles>
      </div>
    </PageSpace>
  );
}

export default disclaimer;
