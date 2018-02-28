function stringClean(s){
  cleaned = s.replace(/[0-9]/g, '');
  return cleaned;
}

//or: return s.replace(/\d/g '');
//which is shorter code.
//stringClean() as a variable to represent the new string.
