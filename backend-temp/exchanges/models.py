from django.db import models

class ExchangeRate(models.Model):
    result = models.IntegerField()
    cur_unit = models.CharField(max_length=20)
    cur_nm = models.CharField(max_length=20)
    ttb = models.FloatField()
    tts = models.FloatField()
    deal_bas_r = models.FloatField()
    bkpr = models.FloatField()
    yy_efee_r = models.FloatField()
    ten_dd_efee_r = models.FloatField()
    kftc_bkpr = models.FloatField()
    kftc_deal_bas_r = models.FloatField()
    