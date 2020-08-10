from setuptools import setup, find_packages

setup(
    name='lassi-ilakkanankal',
    version='0.1.0',
    packages=find_packages(where="மூலம்"),
    package_dir={"": "மூலம்"},
    url='',
    license='AGPL-3.0-or-later',
    author='ம. ஜூலீஎன்',
    author_email='julien.malard@mail.mcgill.ca',
    description='லஸ்ஸி மென்பொருளுக்காக இலக்கணம் குறிப்புகள்',
    install_requires=['lark-parser']
)
