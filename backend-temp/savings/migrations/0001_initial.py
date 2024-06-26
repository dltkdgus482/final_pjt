# Generated by Django 4.2.8 on 2024-05-22 19:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SavingProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fin_prdt_cd', models.TextField()),
                ('fin_prdt_nm', models.TextField()),
                ('kor_co_nm', models.TextField()),
                ('join_way', models.TextField()),
                ('mtrt_int', models.TextField()),
                ('spcl_cnd', models.TextField()),
                ('join_deny', models.IntegerField()),
                ('join_member', models.TextField()),
                ('etc_note', models.TextField(null=True)),
                ('max_limit', models.IntegerField(null=True)),
                ('intr_rate', models.FloatField()),
                ('intr_rate2', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='SavingOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fin_prdt_cd', models.TextField()),
                ('kor_co_nm', models.TextField()),
                ('intr_rate_type', models.CharField(max_length=50)),
                ('intr_rate_type_nm', models.CharField(max_length=50)),
                ('rsrv_type', models.CharField(max_length=50)),
                ('rsrv_type_nm', models.CharField(max_length=50)),
                ('save_trm', models.IntegerField()),
                ('intr_rate', models.FloatField()),
                ('intr_rate2', models.FloatField()),
                ('savingproduct', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='savings.savingproduct')),
            ],
        ),
    ]
