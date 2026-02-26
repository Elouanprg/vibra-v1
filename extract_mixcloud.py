import re

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all mixcloud player widget URLs
pattern = r'https://player-widget\.mixcloud\.com/widget/iframe/\?[^"\s<>\\]+'
urls = re.findall(pattern, content)

seen = set()
for u in urls:
    clean = u.rstrip("',);")
    if clean not in seen:
        seen.add(clean)
        print(clean)
        print()
