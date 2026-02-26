import json

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if i in (604, 606, 609):
            data = json.loads(line)
            msg = data.get('message', {})
            content = msg.get('content', '')
            print(f"=== Line {i} ===")
            if isinstance(content, list):
                for j, block in enumerate(content):
                    print(f"  Block {j}: type={block.get('type', '?')}")
                    if block.get('type') == 'text':
                        print(f"  Text: {block.get('text', '')[:2000]}")
                    elif block.get('type') == 'tool_result':
                        print(f"  Tool result content: {str(block.get('content', ''))[:500]}")
            elif isinstance(content, str):
                print(content[:2000])
            print()
