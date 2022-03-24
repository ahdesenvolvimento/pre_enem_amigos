# Generated by Django 3.2.10 on 2022-03-24 13:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aula',
            name='id_disc_prof',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.professordisciplina'),
        ),
        migrations.AddField(
            model_name='alunoturma',
            name='id_aluno',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.aluno'),
        ),
        migrations.AddField(
            model_name='alunoturma',
            name='id_turma',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.turma'),
        ),
    ]
