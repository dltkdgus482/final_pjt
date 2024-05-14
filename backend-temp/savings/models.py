from django.db import models

class SavingProduct(models.Model):
    fin_prdt_cd = models.TextField()
    fin_prdt_nm = models.TextField()
    kor_co_nm = models.TextField()
    join_way = models.TextField()
    mtrt_int = models.TextField()
    spcl_cnd = models.TextField()
    join_deny = models.IntegerField()
    join_member = models.TextField()
    etc_note = models.TextField()
    max_limit = models.IntegerField()

class SavingOption(models.Model):
    savingproduct = models.ForeignKey(SavingProduct, on_delete=models.CASCADE)
    intr_rate_type = models.CharField(max_length=50)
    intr_rate_type_nm = models.CharField(max_length=50)
    rsrv_type = models.CharField(max_length=50)
    rsrv_type_nm = models.CharField(max_length=50)
    save_trm = models.IntegerField()
    intr_rate = models.FloatField()
    intr_rate2 = models.FloatField()