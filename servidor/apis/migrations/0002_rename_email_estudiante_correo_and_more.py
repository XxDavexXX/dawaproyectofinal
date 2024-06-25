# Generated by Django 4.2.5 on 2024-06-24 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='estudiante',
            old_name='email',
            new_name='correo',
        ),
        migrations.RemoveField(
            model_name='estudiante',
            name='apellido',
        ),
        migrations.AddField(
            model_name='estudiante',
            name='fecharegistro',
            field=models.DateField(default='2023-01-01'),
            preserve_default=False,
        ),
    ]
