# Generated by Django 4.2.1 on 2023-06-06 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Username', models.CharField(max_length=255)),
                ('Password', models.CharField(max_length=255)),
                ('Email', models.CharField(max_length=255)),
                ('Status', models.CharField(max_length=255)),
                ('Added_On', models.CharField(max_length=255)),
                ('User_Role', models.CharField(max_length=255)),
                ('User_Status', models.CharField(max_length=50)),
            ],
        ),
    ]
