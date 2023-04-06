

const scheduleLoop = 
{
                tileNo       : 'T000000000001' ,
                device       : 'D000000001' , 
                scheduleNo   : 'S000000001' ,
                yyyymmdd     : '20230415' ,   // 제거 논의 () <--- 관리는 일자별로 하고 json 에서는 뺄지... 
                scheduleType : 'LOOP' ,       // 반복
                    slot     : [{ 
                                slotNo     : 1 ,
                                layoutcode : 'L000001' ,
                                viewCount  : 1 , 
                                viewData   : [{ 
                                                viewNo  : 1 , 
                                                content : [{    
                                                            contentNo   : 1 , 
                                                            contentType : 'VIDEO' , 
                                                            playTime    : 15 , 
                                                            contentName : '나이키_여름_신상품_신발' ,
                                                            fileName    : '1000000000000001.mp4' ,
                                                            qrCode      : 'https://nike.com/abcdavacdcddt' ,
                                                            startTime   : null ,
                                                            condition   : null ,
                                                          }] 
                                             }]
                               },
                               { 
                                slotNo     : 2 ,
                                layoutcode : 'L000003' ,
                                viewCount  : 3 , 
                                viewData   : [{ 
                                                viewNo  : 1 , 
                                                content : [{    
                                                            contentNo   : 1 , 
                                                            contentType : 'VIDEO' , 
                                                            playTime    : 15 , 
                                                            contentName : '퓨마_브랜드_광고_영상' ,
                                                            fileName    : '1000000000000002.mp4' ,
                                                            qrCode      : 'https://puma.com/abcdavacdcddt' ,
                                                            startTime   : null ,
                                                            condition   : null ,
                                                          }] 
                                               },
                                               { 
                                                viewNo  : 2 , 
                                                content : [{    
                                                            contentNo   : 1 ,
                                                            contentType : 'VIDEO' ,
                                                            playTime    : 15 ,
                                                            contentName : '퓨마_브랜드_광고_브랜드로고_영상' ,
                                                            fileName    : '1000000000000003.mp4' ,
                                                            qrCode      : null ,
                                                            startTime   : null ,
                                                            condition   : null ,
                                                          }] 
                                                },
                                                { 
                                                viewNo  : 3 , 
                                                content : [{    
                                                            contentNo   : 1 ,
                                                            contentType : 'IMAGE' ,
                                                            playTime    : 5 ,
                                                            contentName : '퓨마_브랜드_광고_행사소개_01' ,
                                                            fileName    : '100000000000021.jpg' ,
                                                            qrCode      : null ,
                                                            startTime   : null ,
                                                            condition   : null ,
                                                          },
                                                          {    
                                                            contentNo   : 2 , 
                                                            contentType : 'IMAGE' ,
                                                            playTime    : 5 , 
                                                            contentName : '퓨마_브랜드_광고_행사소개_02' ,
                                                            fileName    : '100000000000022.mp4' ,
                                                            qrCode      : null ,
                                                            startTime   : null ,
                                                            condition   : null ,
                                                         },
                                                         {    
                                                            contentNo   : 3 , 
                                                            contentType : 'IMAGE' , 
                                                            playTime    : 5 , 
                                                            contentName : '퓨마_브랜드_광고_행사소개_03' ,
                                                            fileName    : '100000000000023.mp4' ,
                                                            qrCode      : null ,
                                                            startTime   : null ,
                                                            condition   : null ,
                                                         }] 
                                                }]
                            }]
            }

            // 이미지 는 별도 오브젝트 관리 할지 여부 ( 예시 - 15초 동안 해당 오브젝트 롤링 )
            // 시간 , 조건 은 startTime , contition(Object) 사용