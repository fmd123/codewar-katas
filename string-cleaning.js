function stringClean(s){
  cleaned = s.replace(/[0-9]/g, '');
  return cleaned;
}

//or: return s.replace(/\d/g '');
//which is shorter code but not as explicit.
//on other hand simply use stringClean() as a variable to represent the new string.
