# Generated by Django 4.2.8 on 2024-05-20 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExchangeRate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('result', models.IntegerField()),
                ('cur_unit', models.CharField(max_length=20)),
                ('cur_nm', models.CharField(max_length=20)),
                ('ttb', models.FloatField()),
                ('tts', models.FloatField()),
                ('deal_bas_r', models.FloatField()),
                ('bkpr', models.FloatField()),
                ('yy_efee_r', models.FloatField()),
                ('ten_dd_efee_r', models.FloatField()),
                ('kftc_bkpr', models.FloatField()),
                ('kftc_deal_bas_r', models.FloatField()),
            ],
        ),
    ]
