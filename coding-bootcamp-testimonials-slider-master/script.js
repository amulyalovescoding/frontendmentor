const prevBtn = $('.prev-btn');
const nextBtn = $('.next-btn');
const profile1 = $('.profile-1');
const profile2 = $('.profile-2');

prevBtn.click(function(){
  profile2.addClass('hidden');
  profile1.removeClass('hidden');
});

nextBtn.click(function(){
  profile1.addClass('hidden');
  profile2.removeClass('hidden');
});
