# Generated by Django 4.2.8 on 2024-05-23 06:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('savings', '0002_alter_savingproduct_intr_rate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='savingoption',
            name='intr_rate',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='savingoption',
            name='intr_rate2',
            field=models.FloatField(null=True),
        ),
    ]
