from django.db import models

class DepositProduct(models.Model):
    fin_prdt_cd = models.TextField()            # 금융상품코드
    fin_prdt_nm = models.TextField()            # 금융상품명
    kor_co_nm = models.TextField()              # 금융회사명
    join_way = models.TextField()               # 가입방법
    mtrt_int = models.TextField()               # 만기이자율
    spcl_cnd = models.TextField()               # 우대조건
    join_deny = models.IntegerField()           # 가입제한
    join_member = models.TextField()            # 가입대상
    etc_note = models.TextField(null=True)      # 기타주의사항
    max_limit = models.IntegerField(null=True)  # 최대한도
    intr_rate = models.FloatField()             # 기본금리
    intr_rate2 = models.FloatField()            # 최고금리

class DepositOption(models.Model):
    depositproduct = models.ForeignKey(DepositProduct, on_delete=models.CASCADE)   
    intr_rate_type = models.CharField(max_length=50)      # 저축 금리 유형
    intr_rate_type_nm = models.CharField(max_length=50)   # 저축 금리 유형명
    save_trm = models.IntegerField()                      # 저축 기간(단위: 개월)
    intr_rate = models.FloatField()                       # 기본금리
    intr_rate2 = models.FloatField()                      # 최고금리